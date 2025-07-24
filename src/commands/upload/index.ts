import type { Command } from "commander";

export function setupUploadCommand(program: Command) {
  program
    .command("upload")
    .argument("<file>")
    .action((file: string) => {
      console.log(file);
    })
}
