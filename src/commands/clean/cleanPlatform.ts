import { readdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { logger } from "../../utils/Logger.js";
import type { IBaseVerboseOptions } from "../../types/index.js";
import { getXyxTemplatePath } from "./getXyxTemplatePath.js";
import { parseConfigId } from "./parseConfigId.js";

export async function cleanPlatform(
	configId: string,
	options: IBaseVerboseOptions,
) {
	if (options.verbose) {
		logger.setLevel(3); // DEBUG level
	}

	const { platform } = parseConfigId(configId);

	const xyxTemplatePath = await getXyxTemplatePath();
	let platformCommonPath = join(xyxTemplatePath, "common", platform);
	let targetDir = join(process.cwd(), "platform", configId);

	if (platform === "hippoo") {
		platformCommonPath = join(platformCommonPath, "game");
		targetDir = join(targetDir, "game");
	}

	const allFiles = await readdir(platformCommonPath);

	let files = await readdir(targetDir);

	files = files.filter((file: string) => {
		if (allFiles.includes(file)) {
			return false;
		}
		return true;
	});

	files = files.map((file: string) => {
		return join(targetDir, file);
	});

	files.forEach(async (file: string) => {
		logger.info(`Removed Files: ${file}`);
		await rm(file, {
			recursive: true,
			force: true,
		});
	});
}
