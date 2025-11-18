import { constants } from "node:fs";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_PATH = path.resolve(__dirname, "../../../AGENTS.md");

type CommandHandler = (args: string[]) => Promise<void> | void;

export interface InitOptions {
  dir: string;
  force: boolean;
}

const commands: Record<string, CommandHandler> = {
  init,
  help,
};

export async function runCli(argv = process.argv.slice(2)): Promise<void> {
  if (argv.includes("--help") || argv.includes("-h")) {
    showHelp();
    return;
  }

  const [command = "help", ...rest] = argv;
  const handler = commands[command] ?? help;

  try {
    await handler(rest);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[universal-agents] ${message}`);
    process.exitCode = 1;
  }
}

async function init(args: string[]): Promise<void> {
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

async function help(): Promise<void> {
  showHelp();
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

function showHelp(): void {
  console.log(
    `Universal Agents CLI\n\nUsage:\n  universal-agents init [path] [options]\n\nOptions:\n  -d, --dir <path>    Target directory (defaults to current working directory)\n  -f, --force         Overwrite AGENTS.md if it already exists\n  --help              Show this message\n`
  );
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
