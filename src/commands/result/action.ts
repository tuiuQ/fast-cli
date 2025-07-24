import type { ConfigId } from "../../types/XYXConfig.js";
import { getXYXConfig } from "../../utils/getXYXConfig.js";
import { logger, LogLevel } from "../../utils/Logger.js";
import { getProjectPath } from "../../utils/path.js";
import { buildLinks } from "./links.js";
import { render } from "./renderer.js";
import type { RenderCtx, ResultOptions } from "./types.js";

export async function resultAction(configId: ConfigId, opts: ResultOptions) {
  if (opts.verbose) {
    logger.setLevel(LogLevel.DEBUG);
  }

  const projectDir = getProjectPath();

  logger.debug("configId: ", configId);
  logger.debug("opts: ", opts);
  logger.debug("projectDir: ", projectDir);

  const xyxConfig = await getXYXConfig(projectDir);

  const cfg = xyxConfig[configId];

  if (!cfg) {
    logger.error(`configId ${configId} 不存在`)
    process.exit(1);
  }

  const links = buildLinks(configId, cfg.online_url as string);
  const ctx: RenderCtx = {
    ...links,
    project_name: cfg.project_name,
    platform: `[${configId}]`,
    version: cfg.version_name,
    package_download_address: `${links.package_download_address}${cfg.version_name}.zip`,
    changelog: ""
  };

  logger.debug("renderCtx", ctx);

  console.log(render(ctx));
}
