export type ConfigId = string;

export enum Platform {
  vivo = "vivo",
  oppo = "oppo",
  tt = "tt",
  mz = "mz",
  qq = "qq",
  hw = "hw",
  honor = "honor",
  cordova = "cordova",
  xlb = "xlb",
  web = "web",
  game2345 = "2345",
  ks = "ks",
  kwai = "kwai",
  mi = "mi",
  wx = "wx",
  jd = "jd",
  gpt = "gpt",
  afg = "afg",
  hippoo = "hippoo",
  botim = "botim",
  harmony = "harmony",
}

export enum Framework {
  c2 = "c2", // Construct2
  c3 = "c3", // Construct3
  egret = "egret", // Egret
  laya = "laya", // Laya
  phaser = "phaser", // Phaser
  createjs = "createjs", // CreateJs
  famobi = "famobi", // Famobi
  openfl = "openfl",
  cocos = "cocos",
  cocos2djs = "cocos2djs",
  playcanvas = "playcanvas",
  pixi = "pixi",
  unity = "unity",
  impactjs = "impactjs",
  defold = "defold",
  gamemaker = "gamemaker",
  unknown = "unknown",
  threejs = "threejs",
  scratch = "scratch",
}

export enum Orientation {
  landscape = "landscape",
  portrait = "portrait"
}

export interface CommonConfig {
  package_name: string;
  project_name: string;
  project_description: string;
  orientation: Orientation;
  logo: string;
  framework: Framework;
  plugins: string[];
  gameMainFileName: string;
  moduleWithoutRequire: string[];
  useVM: boolean;
  disabledVMAPI?: string[];
  libVersion: string;
}

export interface PlatformConfig {
  project_id: string;
  project_name: string;
  min_platform_version: string;
  version_name: string;
  version_code: string | number;
  home_page?: string;

  resource_map: Array<[string, string]>;
  resource_need_rm?: string[];

  reverse_pkg_map?: boolean;
  pkg_map?: string;
  reverse_pkg_map_target?: string;

  positive_pkg_map?: boolean;
  positive_pkg_map_target?: string;

  online_url?: string;

  bundleConfig?: {
    configPath: string;
    bundleTarget: string;
    keepOriginal?: boolean;
  };

  request_token?: string;
}

export type XYXConfig = {
  common: CommonConfig;
} & {
  [key: ConfigId]: PlatformConfig;
}
