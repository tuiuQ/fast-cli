import type { Command } from "commander"
import { createFontSubset } from "./createFontSubset.js"
import { logger } from "../../logger.js"

export interface ISubsetOptions {
  lang: "en" | "es" | "pt" | "id"
  format?: string
  output?: string
}

/**
 * 字体子集化工具
 * 从字体文件中提取指定语言的字符子集
 */
export function setupSubsetCommand(program: Command) {
  program
    .command("subset")
    .description("从字体文件中提取指定语言的字符子集")
    .argument("<font_file>", "字体文件路径 (支持 .ttf, .otf, .woff, .woff2)")
    .option("-l, --lang <lang>", "目标语言 (en|es|pt|id)", "en")
    .option("-f, --format <format>", "输出格式 (ttf|otf|woff|woff2)")
    .option("-o, --output <output>", "输出目录路径")
    .action(async (fontFile: string, options: ISubsetOptions) => {
      try {
        await createFontSubset(fontFile, options)
      } catch (error) {
        logger.error("字体子集化失败:", error instanceof Error ? error.message : error)
        process.exit(1)
      }
    })
}
