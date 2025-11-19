import { constants } from "node:fs";
import { access, mkdir, writeFile } from "node:fs/promises";
import * as path from "node:path";
import { input } from "@inquirer/prompts";

/**
 * Scaffolds `.agents/skills/<slug>/SKILL.md`.
 */
export async function createSkill(): Promise<void> {
  const name = await promptForName("Skill name:");
  const slug = toSlug(name);

  const targetDir = path.resolve(process.cwd(), ".agents", "skills", slug);
  const targetFile = path.join(targetDir, "SKILL.md");

  await ensureDirExists(targetDir);
  await ensureFileAbsent(targetFile, "Skill already exists");
  await writeFile(targetFile, "", "utf8");
  console.log(`Created skill stub at ${targetFile}`);
}

/**
 * Scaffolds `.agents/rules/<slug>.md`.
 */
export async function createRule(): Promise<void> {
  const name = await promptForName("Rule name:");
  const slug = toSlug(name);

  const targetFile = path.resolve(
    process.cwd(),
    ".agents",
    "rules",
    `${slug}.md`
  );
  await ensureDirExists(path.dirname(targetFile));
  await ensureFileAbsent(targetFile, "Rule already exists");
  await writeFile(targetFile, "", "utf8");
  console.log(`Created rule stub at ${targetFile}`);
}

async function promptForName(message: string): Promise<string> {
  try {
    return await input({
      message,
      validate: (value: string) => {
        const slug = toSlug(value);
        return (
          slug.length > 0 || "Please enter at least one alphanumeric character."
        );
      },
    });
  } catch (error) {
    if (isPromptCancel(error)) {
      throw new Error("Operation cancelled.");
    }
    throw error;
  }
}

async function ensureDirExists(targetDir: string): Promise<void> {
  await mkdir(targetDir, { recursive: true });
}

async function ensureFileAbsent(
  targetFile: string,
  message: string
): Promise<void> {
  try {
    await access(targetFile, constants.F_OK);
    throw new Error(`${message}: ${targetFile}`);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return;
    }
    throw error;
  }
}

function toSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isPromptCancel(error: unknown): boolean {
  if (!error || typeof error !== "object") {
    return false;
  }

  const name = "name" in error ? (error as { name?: string }).name : undefined;
  return Boolean(
    name &&
      ["AbortPromptError", "CancelPromptError", "ExitPromptError"].some(
        (cancelName) => cancelName === name
      )
  );
}
