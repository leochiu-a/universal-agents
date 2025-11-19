import { beforeEach, describe, expect, it, vi } from "vitest";
import { runCli } from "./cli";

const initMock = vi.hoisted(() => vi.fn());
const createSkillMock = vi.hoisted(() => vi.fn());
const createRuleMock = vi.hoisted(() => vi.fn());

vi.mock("./init.js", () => ({
  init: initMock,
}));

vi.mock("./create.js", () => ({
  createSkill: createSkillMock,
  createRule: createRuleMock,
}));

describe("runCli", () => {
  beforeEach(() => {
    initMock.mockReset();
    createSkillMock.mockReset();
    createRuleMock.mockReset();
    process.exitCode = undefined;
  });

  it("invokes init without arguments", async () => {
    await runCli(["init"]);

    expect(initMock).toHaveBeenCalledTimes(1);
    expect(initMock).toHaveBeenCalledWith();
  });

  it("ignores provided path arguments", async () => {
    await runCli(["init", "demo"]);

    expect(initMock).toHaveBeenCalledTimes(1);
    expect(initMock).toHaveBeenCalledWith();
  });

  it("invokes create skill subcommand", async () => {
    await runCli(["create", "skill"]);

    expect(createSkillMock).toHaveBeenCalledTimes(1);
    expect(createSkillMock).toHaveBeenCalledWith();
  });

  it("invokes create rule subcommand", async () => {
    await runCli(["create", "rule"]);

    expect(createRuleMock).toHaveBeenCalledTimes(1);
    expect(createRuleMock).toHaveBeenCalledWith();
  });
});
