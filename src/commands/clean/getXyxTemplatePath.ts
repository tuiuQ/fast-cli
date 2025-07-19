import { join } from "path";
import { xyxTemplatePath } from "./constants.js";
import { getXyxTemplateVersion } from "./getXyxTemplateVersion.js";

export async function getXyxTemplatePath() {
	const version = await getXyxTemplateVersion();
	return join(xyxTemplatePath, `xyx-template-${version}`);
}
