import { join } from "path";
import { readJSON } from "../../utils/readJSON";
import { xyxTemplatePath } from "./constants";

export async function getXyxTemplateVersion() {
  const xyxTemplateData = await readJSON<{
    cachedVersion: string,
    lastUpdate: number
  }>(join(xyxTemplatePath, "data.json"));

  return xyxTemplateData.cachedVersion
}
