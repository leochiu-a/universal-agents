import { beforeEach, describe, expect, it, vi } from "vitest";
import { runCli } from "./cli";

const initMock = vi.hoisted(() => vi.fn());

vi.mock("./init.js", () => ({
  init: initMock,
}));

describe("runCli", () => {
  beforeEach(() => {
    initMock.mockReset();
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
});
