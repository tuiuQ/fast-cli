import { logger } from "../../utils/Logger.js";
import type { UploadOptions } from "./types.js";

export async function uploadAction(file: string, opts: UploadOptions) {
  logger.debug("file: ", file);
  logger.debug("options: ", opts);
}
