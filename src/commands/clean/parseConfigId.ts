/**
 * 配置对象接口
 */
export interface Config {
  platform: string;
  channel: string;
  publisher: string;
}

/**
 * 解析配置ID字符串
 * 
 * 格式: Platform@Channel#Publisher
 * 示例: ios@appstore#apple
 * 
 * @param configId 配置ID字符串
 * @returns 解析后的配置对象
 * @throws 当格式无效时抛出错误
 */
export function parseConfigId(configId: string): Config {
  if (!configId.trim()) {
    throw new Error("配置ID不能为空")
  }

  // Platform@Channel#Publisher
  const [ platformPart, publisherPart = "" ] = configId.split("#")
  const [ platform, channel = "" ] = platformPart.split("@")
  
  if (!platform.trim()) {
    throw new Error("平台名称不能为空")
  }

  return {
    platform: platform.trim(),
    channel: channel.trim(),
    publisher: publisherPart.trim(),
  }
}
