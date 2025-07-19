import { describe, expect, it } from "vitest";
import { parseConfigId, type Config } from "./parseConfigId.js"

const testConfigIdList: Record<string, Config> = {
  "kwai#pt": {
    platform: "kwai",
    publisher: "pt",
    channel: ""
  },
  "hippoo#hnyige": {
    platform: "hippoo",
    publisher: "hnyige",
    channel: "",
  },
  "hippoo": {
    platform: "hippoo",
    publisher: "",
    channel: "",
  }
}

describe("parseConfigId", () => {
  for (const [configId, config] of Object.entries(testConfigIdList)) {
    it(`test parse ${configId} configId`, () => {
      const result = parseConfigId(configId)
      expect(result).toEqual<Config>(config)
    })
  }
});
