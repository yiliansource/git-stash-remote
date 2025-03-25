import { execSync } from "node:child_process";

export function getGitBranches(): string[] {
    try {
        const result = execSync("git branch", { encoding: "utf8" });
        return result
            .split("\n")
            .map((branch) => branch.trim())
            .filter(Boolean)
            .map((branch) => branch.replace(/^\* /, ""));
    } catch (error) {
        console.error("Error fetching branches:", error);
        return [];
    }
}
