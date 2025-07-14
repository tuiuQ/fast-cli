import type { Command } from "commander";

interface ISubsetOptions {
  lang: string;
  format: string;
}

export function setupSubsetCommand(program: Command) {
  program
    .command("subset")
    .description("subset dist folder")
    .argument("<font_file>", "font file path")
    .option("-l, --lang <lang>", "subset lang", "en")
    .option("-f, --format <format>", "subset format")
    .action((file: string, options: ISubsetOptions) => {
      // TODO: subset font file
    });
}