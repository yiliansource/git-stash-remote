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

export function hasUncommittedChanges(): boolean {
    try {
        const status = execSync("git status --porcelain", { encoding: "utf8" }).trim();
        return status.length > 0; // Non-empty output means there are uncommitted changes
    } catch (error) {
        console.error("Error checking for uncommitted changes:", error);
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
