import { join } from "node:path";

export const xyxTemplatePath = join(
	process.env.HOME as string,
	".xyx-cli",
	"template",
);
// export const xyxTemplatePath = `~/.xyx-cli/template/`
