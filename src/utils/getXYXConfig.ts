import { join } from "path";
import type { XYXConfig } from "../types/XYXConfig.js";
import { readJSON } from "./readJSON.js";

export async function getXYXConfig(projectBase: string): Promise<XYXConfig> {
  const xyxConfigPath = join(projectBase, "xyx.config.json");
  return await readJSON<XYXConfig>(xyxConfigPath);
}
