import { select } from "@inquirer/prompts";
import { Args, Command } from "@oclif/core";
import spawn from "nano-spawn";
import ora from "ora";

import { getRemoteStashIds, hasUncommittedChanges } from "../util/git.js";
import { getStashBranch } from "../util/paths.js";

export default class Pop extends Command {
    static override args = {
        stashId: Args.string({ description: "The desired stash ID." }),
    };
    static override description = "Pushes the current changes the a remote stash.";

    public async run(): Promise<void> {
        const dirty = await hasUncommittedChanges();
        if (dirty) {
            this.error("cannot pop stash while repository is dirty");
        }

        const { args } = await this.parse(Pop);

        let { stashId } = args;
        if (!stashId) {
            const stashIds = await getRemoteStashIds();
            if (stashIds.length === 0) {
                this.error("no remote stashes found.");
            }

            stashId = await select({
                choices: stashIds.map((s) => ({
                    value: s,
                })),
                message: "Select the stash you want to pop:",
            });
        }

        const stashBranch = getStashBranch(stashId);

        this.log(`fetching remote ${stashBranch}`);
        await spawn(`git`, [`fetch`, `origin`, stashBranch]);

        this.log(`merge changes`);
        await spawn(`git`, [`merge`, `--no-commit`, `--no-ff`, `origin/${stashBranch}`]);

        const deleteSpinner = ora(`deleting remote stash`);
        await spawn(`git`, [`push`, `origin`, `--delete`, stashBranch]);
        deleteSpinner.succeed("deleted remote stash");

        this.log(`all done!`);
    }
}
