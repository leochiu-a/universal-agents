import { init } from "./init.js";

type CommandHandler = (args: string[]) => Promise<void> | void;

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

async function help(): Promise<void> {
  showHelp();
}

function showHelp(): void {
  console.log(
    `Universal Agents CLI\n\nUsage:\n  universal-agents init [path] [options]\n\nOptions:\n  -d, --dir <path>    Target directory (defaults to current working directory)\n  -f, --force         Overwrite AGENTS.md if it already exists\n  --help              Show this message\n`
  );
}
