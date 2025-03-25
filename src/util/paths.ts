export const STASH_GROUP_KEY = "stash";

export function getStashBranch(id: string) {
    return STASH_GROUP_KEY + "/" + id;
}
