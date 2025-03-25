import spawn from "nano-spawn";

import { STASH_GROUP_KEY } from "./paths.js";

export async function getRemoteStashIds(): Promise<string[]> {
    try {
        const result = await spawn("git branch -r").catch(() => {
            throw new Error("unable to fetch remote branches");
        });

        const prefix = "origin/" + STASH_GROUP_KEY + "/";
        return result.output
            .split("\n")
            .map((branch) => branch.trim())
            .filter((branch) => branch.startsWith(prefix))
            .map((branch) => branch.slice(prefix.length))
            .sort();
    } catch {
        return [];
    }
}

export async function hasUncommittedChanges(): Promise<boolean> {
    try {
        const result = await spawn("git", ["status", "--porcelain"]).catch(() => {
            throw new Error("unable to fetch git status");
        });

        return result.output.trim().length > 0;
    } catch {
        return false;
    }
}

export async function getCurrentBranch(): Promise<null | string> {
    try {
        const result = await spawn("git rev-parse --abbrev-ref HEAD").catch(() => {
            throw new Error("unable to fetch current branch");
        });

        return result.output;
    } catch {
        return null;
    }
}

export async function isGitRepo(cwd: string = process.cwd()): Promise<boolean> {
    try {
        await spawn("git", ["rev-parse", "--is-inside-work-tree"], { cwd }).catch(() => {
            throw new Error("unable to fetch git status");
        });

        return true;
    } catch {
        return false;
    }
}
