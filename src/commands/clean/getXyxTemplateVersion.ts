import { join } from "node:path";
import { readJSON } from "../../utils/readJSON.js";
import { xyxTemplatePath } from "./constants.js";

export async function getXyxTemplateVersion() {
	const xyxTemplateData = await readJSON<{
		cachedVersion: string;
		lastUpdate: number;
	}>(join(xyxTemplatePath, "data.json"));

	return xyxTemplateData.cachedVersion;
}
