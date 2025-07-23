/** Fast CLI 主入口文件
 * 提供字体子集化和清理功能的命令行工具
 *
 * @fileoverview 主程序入口，负责初始化命令行界面和注册所有子命令
 */

import { Command } from "commander";
import pkg from "../package.json" with { type: "json" };
import { setupCleanCommand } from "./commands/clean/index.js";
import { setupResultCommand } from "./commands/result/index.js";
import { setupSubsetCommand } from "./commands/subset/index.js";

/**
 * 创建并配置CLI程序
 */
const program = new Command("fast");

// 设置程序版本信息
program.version(pkg.version, "-v, --version", "显示版本号");

/**
 * 注册所有子命令
 */
setupCleanCommand(program);
setupSubsetCommand(program);
setupResultCommand(program);

/**
 * 解析并执行命令
 */
program.parse(process.argv);

// 如果没有提供命令，显示帮助信息
if (!process.argv.slice(2).length) {
	program.outputHelp();
}
