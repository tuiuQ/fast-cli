import type { Command } from "commander";
import type { UploadOptions } from "./types.js";
import { logger, LogLevel } from "../../utils/Logger.js";
import { uploadAction } from "./actions.js";

export function setupUploadCommand(program: Command) {
  program
    .command("upload")
    .argument("<file>")
		.option("-V, --verbose", "显示详细输出")
    .action(async (file: string, options: UploadOptions) => {
      if (options.verbose) {
        logger.setLevel(LogLevel.DEBUG);
      }

      await uploadAction(file, options);
    })
}
