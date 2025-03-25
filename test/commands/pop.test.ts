import { runCommand } from "@oclif/test";
import { expect } from "chai";

describe("pop", () => {
    it("runs pop cmd", async () => {
        const { stdout } = await runCommand("pop");
        expect(stdout).to.contain("hello world");
    });

    it("runs pop --name oclif", async () => {
        const { stdout } = await runCommand("pop --name oclif");
        expect(stdout).to.contain("hello oclif");
    });
});
