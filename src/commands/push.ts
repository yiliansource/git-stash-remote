import { input } from "@inquirer/prompts";
import { Args, Command } from "@oclif/core";
import { format } from "date-fns";
import spawn from "nano-spawn";
import ora from "ora";

import { getCurrentBranch, hasUncommittedChanges } from "../util/git.js";
import { getStashBranch } from "../util/paths.js";

export default class Push extends Command {
    static override args = {
        stashId: Args.string({ description: "The desired stash ID." }),
    };
    static override description = "Pushes the current changes the a remote stash.";

    public async run(): Promise<void> {
        const dirty = await hasUncommittedChanges();
        if (!dirty) {
            this.error("cannot push stash without changes");
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
        const stashBranch = getStashBranch(stashId);

        const spinner = ora("Loading unicorns").start();

        spinner.text = `checking out local ${stashBranch}`;
        await spawn(`git checkout -b ${stashBranch}`, { stdio: "pipe" });
        spinner.text = `adding changes`;
        await spawn(`git add . && git commit -m "git-remote-stash"`, { stdio: "pipe" });
        spinner.text = `pushing`;
        await spawn(`git push origin ${stashBranch}`, { stdio: "pipe" });
        spinner.text = `switching to old branch`;
        await spawn(`git checkout ${currentBranch}`);
        spinner.text = `deleting stash branch`;
        await spawn(`git branch -D ${stashBranch}`);
        spinner.succeed(`done`);
    }
}
