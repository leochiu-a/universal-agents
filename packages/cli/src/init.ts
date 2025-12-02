import { constants } from "node:fs";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// When published, AGENTS.md ships next to the compiled files.
const PACKAGE_TEMPLATE_PATH = path.resolve(__dirname, "../AGENTS.md");
// During local development, fall back to the repo root file.
const REPO_TEMPLATE_PATH = path.resolve(__dirname, "../../../AGENTS.md");

/**
 * Creates AGENTS.md from the repo template in the current working directory.
 */
export async function init(): Promise<void> {
  const template = await readTemplate();
  const targetDir = process.cwd();
  const targetFile = path.join(targetDir, "AGENTS.md");

  await mkdir(targetDir, { recursive: true });

  if (await fileExists(targetFile)) {
    throw new Error(`AGENTS.md already exists at ${targetFile}.`);
  }

  await writeFile(targetFile, template, "utf8");
  console.log(`AGENTS.md created at ${targetFile}`);
}

/**
 * Reads the root template once so the CLI shares a single source of truth.
 */
async function readTemplate(): Promise<string> {
  const candidates = [PACKAGE_TEMPLATE_PATH, REPO_TEMPLATE_PATH];

  for (const filePath of candidates) {
    if (await fileExists(filePath)) {
      return readFile(filePath, "utf8");
    }
  }

  throw new Error(`Template not found. Checked: ${candidates.join(", ")}`);
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
