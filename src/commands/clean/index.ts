import type { Command } from "commander";

export function setupCleanCommand(program: Command) {
  program
    .command("clean")
    .action(() => {
      console.log("clean");
    });
}