import type { Command } from "commander";
import type { IBaseVerboseOptions } from "../../types/index.js";
import { LogLevel, logger } from "../../utils/Logger.js";
import { join } from "node:path";
import { existsSync } from "node:fs";

function findParent(basePath: string, comparator: (basePath: string) => boolean): string {
  if (comparator(basePath)) {
    return basePath;
  }

  const parentDir = join(basePath, "../");

  if (parentDir) {
    return findParent(parentDir, comparator);
  }

  return ""
}

export function setupResultCommand(program: Command) {
	program
		.command("result <configId>")
		.description("显示hippoo平台构建后发布结果")
		.option("-V, --verbose", "显示详细输出")
		.action(async (configId: string, options: IBaseVerboseOptions) => {
			if (options.verbose) {
				logger.setLevel(LogLevel.DEBUG);
			}

			logger.debug("当前configId: ", configId);
			logger.debug("配置: ", options);
			logger.debug("运行路径: ", process.cwd());

      const projectDir = findParent(process.cwd(), (basePath: string) => {
        const fullPath = join(basePath, "xyx.config.json");
        if (existsSync(fullPath)) {
          return true;
        }
        return false;
      });


      logger.debug("项目地址", projectDir);
		});
}
