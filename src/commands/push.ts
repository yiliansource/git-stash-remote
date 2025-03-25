import { input } from "@inquirer/prompts";
import { Args, Command } from "@oclif/core";
import { format } from "date-fns";
import { execSync } from "node:child_process";

import { getCurrentBranch, hasUncommittedChanges } from "../util/git.js";

export default class Push extends Command {
    static override args = {
        stashId: Args.string({ description: "The desired stash ID." }),
    };
    static override description = "Pushes the current changes the a remote stash.";
    // static override examples = ["<%= config.bin %> <%= command.id %>"];
    // static override flags = {
    //     // flag with no value (-f, --force)
    //     force: Flags.boolean({ char: "f" }),
    //     // flag with a value (-n, --name=VALUE)
    //     name: Flags.string({ char: "n", description: "name to print" }),
    // };

    public async run(): Promise<void> {
        const dirty = hasUncommittedChanges();
        if (!dirty) {
            this.log("cannot push stash without changes");
            return;
        }

        const { args } = await this.parse(Push);

        let { stashId } = args;
        if (!stashId) {
            stashId = await input({
                default: format(new Date(), "yyyy-MM-dd-HH-mm"),
                message: "Enter the desired stash ID:",
            });
        }

        const currentBranch = getCurrentBranch();
        const stashBranch = `sync/${stashId}`;

        this.log(`checking out local ${stashBranch}`);
        execSync(`git checkout -b ${stashBranch}"`, { stdio: "pipe" });
        this.log(`adding changes`);
        execSync(`git add . && git commit -m "wip"`, { stdio: "pipe" });
        this.log(`pushing`);
        execSync(`git push origin ${stashBranch}`, { stdio: "pipe" });
        this.log(`switching to old branch`);
        execSync(`git checkout ${currentBranch}`);
        this.log(`deleting stash branch`);
        execSync(`git branch -D ${stashBranch}`);
        this.log(`done`);
    }
}
