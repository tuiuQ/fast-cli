/**
 * 日志级别枚举
 */
export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3
}

/**
 * 简单的控制台日志工具
 * 支持日志级别和颜色输出
 */
export class Logger {
  private static instance: Logger
  private level: LogLevel
  private prefix: string

  constructor(level: LogLevel = LogLevel.INFO, prefix: string = '') {
    this.level = level
    this.prefix = prefix ? `[${prefix}] ` : ''
  }

  /**
   * 获取单例实例
   */
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  /**
   * 设置日志级别
   */
  setLevel(level: LogLevel): void {
    this.level = level
  }

  /**
   * 错误日志
   */
  error(message: string, ...args: any[]): void {
    if (this.level >= LogLevel.ERROR) {
      console.error(`\x1b[31m[ERROR]\x1b[0m ${this.prefix}${message}`, ...args)
    }
  }

  /**
   * 警告日志
   */
  warn(message: string, ...args: any[]): void {
    if (this.level >= LogLevel.WARN) {
      console.warn(`\x1b[33m[WARN]\x1b[0m ${this.prefix}${message}`, ...args)
    }
  }

  /**
   * 信息日志
   */
  info(message: string, ...args: any[]): void {
    if (this.level >= LogLevel.INFO) {
      console.info(`\x1b[32m[INFO]\x1b[0m ${this.prefix}${message}`, ...args)
    }
  }

  /**
   * 调试日志
   */
  debug(message: string, ...args: any[]): void {
    if (this.level >= LogLevel.DEBUG) {
      console.debug(`\x1b[36m[DEBUG]\x1b[0m ${this.prefix}${message}`, ...args)
    }
  }
}

// 默认导出实例
export const logger = Logger.getInstance()

