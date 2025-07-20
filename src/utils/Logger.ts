import chalk, { type ChalkInstance } from "chalk"

/**
 * 日志等级
 */
export const LogLevel = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  SILENT: 4,
  0: "DEBUG",
  1: "INFO",
  2: "WARN",
  3: "ERROR",
  4: "SILENT",
} as const;

/**
 * 日志等级字面量
 */
export type LogLevelLiteral = keyof typeof LogLevel;
/**
 * 日志等级数字
 */
export type LogLevelNumber =  typeof LogLevel[LogLevelLiteral];

/**
 * 日志类
 */
class Logger {
  private static instance: Logger;

  /**
   * @param level 日志等级
   * @param prefix 日志前缀
   */
  private constructor(
    private level: LogLevelNumber = LogLevel.INFO,
    private prefix: string = ""
  ) {}

  /**
   * 获取单例实例
   * @returns 日志实例
   */
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   * 设置日志等级
   * @param level 日志等级
   */
  public setLevel(level: LogLevelNumber): void {
    this.level = level;
  }
  
  /**
   * 获取当前时间
   * @returns 当前时间
   */
  private static now(): string {
    return new Date().toLocaleTimeString("en-GB");
  }

  /**
   * 日志记录
   * @param level 日志等级
   * @param bgColor 背景颜色
   * @param color 文本颜色
   * @param message 日志消息
   * @param args 日志参数
   * @returns 
   */
  private _log(
    level: LogLevelNumber,
    bgColor: ChalkInstance,
    color: ChalkInstance,
    message: string,
    ...args: unknown[]
  ): void {
    // 日志等级小于当前等级，不记录
    if (level < this.level) {
      return;
    }
    // 日志消息
    console.log(
      `${chalk.gray(`[${Logger.now()}]`)} ${bgColor(LogLevel[level])} ${color(message)}`,
      ...args
    );
  }
  
  /**
   * 信息日志
   * @param message 日志消息
   * @param args 日志参数
   */
  public info(message: string, ...args: unknown[]) {
    this._log(LogLevel.INFO, chalk.bgCyan, chalk.cyan, message, ...args);
  }
  
  /**
   * 警告日志
   * @param message 日志消息
   * @param args 日志参数
   */
  public warn(message: string, ...args: unknown[]) {
    this._log(LogLevel.WARN, chalk.bgYellow, chalk.yellow, message, ...args);
  }
  
  /**
   * 错误日志
   * @param message 日志消息
   * @param args 日志参数
   */
  public error(message: string, ...args: unknown[]) {
    this._log(LogLevel.ERROR, chalk.bgRed, chalk.red, message, ...args);
  }
  
  /**
   * 调试日志
   * @param message 日志消息
   * @param args 日志参数
   */
  public debug(message: string, ...args: unknown[]) {
    this._log(LogLevel.DEBUG, chalk.bgMagenta, chalk.magenta, message, ...args);
  }
}

export const logger = Logger.getInstance();
export const info = logger.info;
export const warn = logger.warn;
export const error = logger.error;
export const debug = logger.debug;
