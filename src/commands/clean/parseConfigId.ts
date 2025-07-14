/**
 * 解析configId
 * @param configId configId
 * @returns 
 */
export function parseConfigId(configId: string) {
  // Platform@Channel#Publisher
  const [ platformPart, publisherPart = ""] = configId.split("#")
  const [ platform, channel = "" ] = platformPart.split("@")
  return {
    platform,
    channel,
    publisher: publisherPart,
  }
}