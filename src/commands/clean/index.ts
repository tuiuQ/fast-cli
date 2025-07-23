import type { Command } from "commander";
import type { IBaseVerboseOptions } from "../../types/index.js";
import { LogLevel, logger } from "../../utils/Logger.js";
import { parseConfigId } from "../../utils/parseConfigId.js";
import { cleanPlatform } from "./cleanPlatform.js";

/**
 * 清理命令 - 用于清理构建产物
 */
export function setupCleanCommand(program: Command) {
	program
		.command("clean")
		.description("清理构建产物和临时文件")
		.argument("<configId>", "配置ID (格式: Platform@Channel#Publisher)")
		.option("-v, --verbose", "显示详细输出")
		.action(async (configId: string, options: IBaseVerboseOptions) => {
			try {
				const config = parseConfigId(configId);

				if (options.verbose) {
					logger.setLevel(LogLevel.DEBUG); // DEBUG level
				}

				logger.info(`开始清理: ${configId}`);
				logger.debug("解析配置:", config);

				await cleanPlatform(configId, options);

				logger.info(`清理完成: ${config.platform} 平台`);
			} catch (error) {
				logger.error(
					"清理失败:",
					error instanceof Error ? error.message : error,
				);
				process.exit(1);
			}
		});
}
