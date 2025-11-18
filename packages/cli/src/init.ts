import { constants } from "node:fs";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_PATH = path.resolve(__dirname, "../../../AGENTS.md");

export interface InitOptions {
  dir: string;
  force: boolean;
}

export async function init(args: string[]): Promise<void> {
  const options = parseInitOptions(args);
  const template = await readTemplate();
  const targetDir = path.resolve(process.cwd(), options.dir);
  const targetFile = path.join(targetDir, "AGENTS.md");

  await mkdir(targetDir, { recursive: true });

  if (!options.force && (await fileExists(targetFile))) {
    throw new Error(
      `AGENTS.md already exists at ${targetFile}. Use --force to overwrite.`
    );
  }

  await writeFile(targetFile, template, "utf8");
  console.log(`AGENTS.md created at ${targetFile}`);
}

export function parseInitOptions(argv: string[]): InitOptions {
  const options: InitOptions = { dir: ".", force: false };

  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];

    if (value === "--dir" || value === "-d") {
      const nextValue = argv[i + 1];
      if (!nextValue || nextValue.startsWith("-")) {
        throw new Error("Missing value for --dir option");
      }
      options.dir = nextValue;
      i += 1;
    } else if (value === "--force" || value === "-f") {
      options.force = true;
    } else if (!value.startsWith("-")) {
      options.dir = value;
    } else {
      throw new Error(`Unknown option: ${value}`);
    }
  }

  return options;
}

async function readTemplate(): Promise<string> {
  if (!(await fileExists(TEMPLATE_PATH))) {
    throw new Error(`Template not found at ${TEMPLATE_PATH}`);
  }
  return readFile(TEMPLATE_PATH, "utf8");
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
