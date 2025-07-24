import type { Command } from "commander";
import type { IBaseVerboseOptions } from "../../types/index.js";
import { resultAction } from "./action.js";

export function setupResultCommand(program: Command) {
	program
		.command("result <configId>")
		.description("显示hippoo平台构建后发布结果")
		.option("-V, --verbose", "显示详细输出")
		.action(async (configId: string, options: IBaseVerboseOptions) => {
      await resultAction(configId, options);
		});
}
