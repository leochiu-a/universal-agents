import { describe, expect, it } from "vitest";
import { parseInitOptions } from "./cli";

describe("parseInitOptions", () => {
  it("returns defaults when no args provided", () => {
    expect(parseInitOptions([])).toEqual({ dir: ".", force: false });
  });

  it("supports positional directory", () => {
    expect(parseInitOptions(["./demo"]).dir).toBe("./demo");
  });

  it("supports --dir option", () => {
    expect(parseInitOptions(["--dir", "templates"]).dir).toBe("templates");
  });

  it("enables force flag", () => {
    expect(parseInitOptions(["--force"]).force).toBe(true);
  });

  it("throws when --dir is missing a value", () => {
    expect(() => parseInitOptions(["--dir"])).toThrow(/Missing value/);
  });

  it("throws on unknown options", () => {
    expect(() => parseInitOptions(["--unknown"])).toThrow(/Unknown option/);
  });
});
