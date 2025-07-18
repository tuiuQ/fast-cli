import { join } from "path";
import { xyxTemplatePath } from "./constants";
import { getXyxTemplateVersion } from "./getXyxTemplateVersion";

export async function getXyxTemplatePath() {
  const version = await getXyxTemplateVersion();
  return join(xyxTemplatePath, `xyx-template-${version}`);
}
