import { dirname, join } from "path";
import type { ConfigId } from "../../types/XYXConfig.js";
import { parseConfigId } from "../../utils/parseConfigId.js";

interface LinksResult {
  official_advertising_link: string;
  test_advertising_link: string;
  package_download_address: string;
  game_url: string;
  cyProjectName: string;
}

export function buildLinks(configId: ConfigId, online_url: string): LinksResult {
  const { publisher } = parseConfigId(configId);

  const hostname = publisher ? `${publisher}game` : "hnyigegame";
  const host = `http://twww.${hostname}.com/h5games/${hostname}`;

  const url = new URL(online_url);
  const cyProjectName = dirname(url.pathname).replace(/^\//, "");

  return {
    official_advertising_link: `${join(host, cyProjectName, "index.html")}?env=pre`,
    test_advertising_link: `${join(host, cyProjectName, "index.html")}?env=pre&ad_env=preview`,
    package_download_address: `${configId}-${cyProjectName.toLowerCase()}-`,
    game_url: url.href,
    cyProjectName
  }
}
