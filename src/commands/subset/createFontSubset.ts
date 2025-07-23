import { basename, dirname, extname, join } from "node:path";
import { Font, load } from "opentype.js";
import { logger } from "../../utils/Logger.js";
import { charsetMap } from "./charset.js";
import type { ISubsetOptions } from "./index";

/**
 * 创建字体子集
 */
export async function createFontSubset(
	fontFile: string,
	options: ISubsetOptions,
): Promise<void> {
	logger.info(`正在处理字体文件: ${fontFile}`);
	logger.info(`目标语言: ${options.lang}`);

	// 验证语言支持
	if (!(options.lang in charsetMap)) {
		throw new Error(
			`不支持的语言: ${options.lang}. 支持的语言: ${Object.keys(charsetMap).join(", ")}`,
		);
	}

	// 加载字体
	const font = await load(fontFile);
	const text = charsetMap[options.lang as keyof typeof charsetMap];

	// 获取字形，确保包含第一个字形（通常是.notdef）
	const glyphs = [font.glyphs.get(0)].concat(font.stringToGlyphs(text));

	// 移除重复的字形
	const uniqueGlyphs = Array.from(new Set(glyphs));

	logger.info(`提取了 ${uniqueGlyphs.length} 个字形`);

	// 构建输出路径
	const dir = options.output || dirname(fontFile);
	const originalExt = extname(fontFile);
	const originalName = basename(fontFile, originalExt);
	const format = options.format || originalExt.replace(".", "");

	const familyName = `${originalName}-${options.lang}`;
	const outputFilename = `${familyName}.${format}`;
	const outputPath = join(dir, outputFilename);

	// 创建子集字体
	const subsetFont = new Font({
		familyName: familyName,
		styleName: "Regular",
		unitsPerEm: font.unitsPerEm,
		ascender: font.ascender,
		descender: font.descender,
		glyphs: uniqueGlyphs,
	});

	// 保存字体文件
	subsetFont.download(outputPath);

	logger.info(`字体子集已保存到: ${outputPath}`);
}
