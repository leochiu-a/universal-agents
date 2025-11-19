import { Command } from "commander";
import { createRule, createSkill } from "./create.js";
import { init } from "./init.js";

export async function runCli(argv = process.argv): Promise<void> {
  const program = new Command();

  program
    .name("universal-agents")
    .description("Universal Agents CLI utilities")
    .showSuggestionAfterError()
    .showHelpAfterError("(add --help for usage information)");

  program
    .command("init")
    .description("Create an AGENTS.md file from the root template")
    .action(async () => {
      await init();
    });

  const createCommand = program
    .command("create")
    .description("Scaffold support files inside the .agents directory");

  createCommand
    .command("skill")
    .description("Generate an empty skill at .agents/skills/<name>/SKILL.md")
    .action(async () => {
      await createSkill();
    });

  createCommand
    .command("rule")
    .description("Generate an empty rule at .agents/rules/<name>.md")
    .action(async () => {
      await createRule();
    });

  program
    .command("help", { isDefault: true })
    .description("Display help information")
    .action(() => {
      program.outputHelp();
    });

  const parseOptions =
    argv === process.argv ? { from: "node" as const } : { from: "user" as const };
  await program.parseAsync(argv, parseOptions);
}
