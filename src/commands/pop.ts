import { select } from "@inquirer/prompts";
import { Args, Command } from "@oclif/core";
import { execSync } from "node:child_process";

import { getRemoteStashIds, hasUncommittedChanges } from "../util/git.js";

export default class Pop extends Command {
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
        if (dirty) {
            this.log("cannot pop stash while repository is dirty");
            return;
        }

        const { args } = await this.parse(Pop);

        let { stashId } = args;
        if (!stashId) {
            const stashIds = getRemoteStashIds();
            if (stashIds.length === 0) {
                this.log("no remote stashes found.");
                return;
            }

            stashId = await select({
                choices: stashIds.map((s) => ({
                    value: s,
                })),
                message: "Select the stash you want to pop:",
            });
        }

        const branch = `sync/${stashId}`;

        this.log(`fetching remote ${branch}`);
        execSync(`git fetch origin ${branch}"`, { stdio: "pipe" });
        this.log(`merge`);
        execSync(`git merge --no-commit --no-ff origin/${branch}`, { stdio: "pipe" });
        this.log(`deleting remote stash`);
        execSync(`git push origin --delete ${branch}`, { stdio: "pipe" });
        this.log(`done`);
    }
}
