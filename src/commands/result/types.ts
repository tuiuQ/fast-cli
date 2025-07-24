import type { IBaseVerboseOptions } from "../../types/index.js";

export interface ResultOptions extends IBaseVerboseOptions {}

export interface RenderCtx {
  project_name: string;
  platform: string;
  version: string;
  official_advertising_link: string;
  test_advertising_link: string;
  package_download_address: string;
  game_url: string;
  changelog?: string;
}
