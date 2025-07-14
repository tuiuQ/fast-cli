import type { Command } from "commander";
import { parseConfigId } from "./parseConfigId";

export function setupCleanCommand(program: Command) {
  program
    .command("clean")
    .description("clean dist folder")
    .argument("<configId>", "clean config id")
    .action((configId: string) => {
      const { platform } = parseConfigId(configId)
      // TODO
    });
}