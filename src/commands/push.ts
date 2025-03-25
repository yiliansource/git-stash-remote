import { input } from "@inquirer/prompts";
import { Args, Command } from "@oclif/core";
import { format } from "date-fns";
import { execSync } from "node:child_process";

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
        const { args } = await this.parse(Push);

        let { stashId } = args;
        if (!stashId) {
            stashId = await input({
                default: format(new Date(), "yyyy-MM-dd"),
                message: "Enter the desired stash ID:",
            });
        }

        const branch = `sync/${stashId}`;

        execSync(`git stash push -m "wip"`);
        execSync(`git stash branch ${branch}`);
        execSync(`git push origin ${branch}`);

        this.log(stashId);
    }
}
