import spawn from "nano-spawn";
import { execSync } from "node:child_process";

export function getRemoteStashIds(): string[] {
    try {
        const result = execSync("git branch -r", { encoding: "utf8" });
        return result
            .split("\n")
            .map((branch) => branch.trim())
            .filter((branch) => branch.startsWith("origin/sync/"))
            .map((branch) => branch.slice("origin/sync/".length));
    } catch (error) {
        console.error("Error fetching branches:", error);
        return [];
    }
}

export async function hasUncommittedChanges(): Promise<boolean> {
    try {
        const result = await spawn("git", ["status", "--porcelain"]).catch(() => {
            // eslint-disable-next-line unicorn/error-message
            throw new Error();
        });
        return result.output.trim().length > 0;
    } catch {
        return false;
    }
}

export function getCurrentBranch(): null | string {
    try {
        const branch = execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf8" }).trim();
        return branch;
    } catch (error) {
        console.error("Error getting current branch:", error);
        return null;
    }
}

export async function isGitRepo(cwd: string = process.cwd()): Promise<boolean> {
    try {
        await spawn("git", ["rev-parse", "--is-inside-work-tree"], { cwd, stdio: "ignore" }).catch(() => {
            // eslint-disable-next-line unicorn/error-message
            throw new Error();
        });
        return true;
    } catch {
        return false;
    }
}
