import { Hook } from "@oclif/core";

import { isGitRepo } from "../util/git.js";

const hook: Hook.Prerun = async function (options) {
    const isGit = await isGitRepo();
    if (!isGit) {
        options.context.error("this can only be run in a git repository.");
        options.context.exit(1);
    }
};

export default hook;
