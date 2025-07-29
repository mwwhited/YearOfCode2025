/**
 * Development-only logging utility
 * Console logs are only displayed when running in development mode
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerConfig {
  isDevelopment: boolean;
  enabledLevels: LogLevel[];
  prefix?: string;
}

class Logger {
  private config: LoggerConfig;

  constructor(config?: Partial<LoggerConfig>) {
    this.config = {
      isDevelopment: import.meta.env.DEV || process.env.NODE_ENV === 'development',
      enabledLevels: ['debug', 'info', 'warn', 'error'],
      prefix: '🔧',
      ...config
    };
  }

  /**
   * Debug level logging - most verbose
   */
  debug(message: string, ...args: any[]): void {
    this.log('debug', message, ...args);
  }

  /**
   * Info level logging - general information
   */
  info(message: string, ...args: any[]): void {
    this.log('info', message, ...args);
  }

  /**
   * Warning level logging - potential issues
   */
  warn(message: string, ...args: any[]): void {
    this.log('warn', message, ...args);
  }

  /**
   * Error level logging - actual errors
   */
  error(message: string, ...args: any[]): void {
    this.log('error', message, ...args);
  }

  /**
   * Success level logging - positive outcomes
   */
  success(message: string, ...args: any[]): void {
    if (this.shouldLog('info')) {
      console.log(`✅ ${message}`, ...args);
    }
  }

  /**
   * Loading/processing level logging
   */
  loading(message: string, ...args: any[]): void {
    if (this.shouldLog('info')) {
      console.log(`🔄 ${message}`, ...args);
    }
  }

  /**
   * Authentication related logging
   */
  auth(message: string, ...args: any[]): void {
    if (this.shouldLog('info')) {
      console.log(`🔐 ${message}`, ...args);
    }
  }

  /**
   * API related logging
   */
  api(message: string, ...args: any[]): void {
    if (this.shouldLog('info')) {
      console.log(`🌐 ${message}`, ...args);
    }
  }

  /**
   * Storage related logging
   */
  storage(message: string, ...args: any[]): void {
    if (this.shouldLog('debug')) {
      console.log(`🗄️ ${message}`, ...args);
    }
  }

  /**
   * Cleanup related logging
   */
  cleanup(message: string, ...args: any[]): void {
    if (this.shouldLog('info')) {
      console.log(`🧹 ${message}`, ...args);
    }
  }

  /**
   * Generic logging with emoji prefix
   */
  log(level: LogLevel, message: string, ...args: any[]): void {
    if (!this.shouldLog(level)) {
      return;
    }

    const emoji = this.getLevelEmoji(level);
    const logMethod = this.getLogMethod(level);
    
    logMethod(`${emoji} ${message}`, ...args);
  }

  /**
   * Group logging - useful for collapsing related logs
   */
  group(title: string, collapsed: boolean = false): void {
    if (this.config.isDevelopment) {
      if (collapsed) {
        console.groupCollapsed(`${this.config.prefix} ${title}`);
      } else {
        console.group(`${this.config.prefix} ${title}`);
      }
    }
  }

  /**
   * End group logging
   */
  groupEnd(): void {
    if (this.config.isDevelopment) {
      console.groupEnd();
    }
  }

  /**
   * Table logging - useful for structured data
   */
  table(data: any, columns?: string[]): void {
    if (this.config.isDevelopment) {
      console.table(data, columns);
    }
  }

  /**
   * Time tracking - start timer
   */
  time(label: string): void {
    if (this.config.isDevelopment) {
      console.time(label);
    }
  }

  /**
   * Time tracking - end timer
   */
  timeEnd(label: string): void {
    if (this.config.isDevelopment) {
      console.timeEnd(label);
    }
  }

  /**
   * Assert logging - only logs if condition is false
   */
  assert(condition: boolean, message: string, ...args: any[]): void {
    if (this.config.isDevelopment) {
      console.assert(condition, message, ...args);
    }
  }

  /**
   * Update logger configuration
   */
  configure(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Check if we should log for this level
   */
  private shouldLog(level: LogLevel): boolean {
    return this.config.isDevelopment && this.config.enabledLevels.includes(level);
  }

  /**
   * Get emoji for log level
   */
  private getLevelEmoji(level: LogLevel): string {
    const emojis = {
      debug: '🐛',
      info: 'ℹ️',
      warn: '⚠️',
      error: '❌'
    };
    return emojis[level];
  }

  /**
   * Get console method for log level
   */
  private getLogMethod(level: LogLevel): typeof console.log {
    const methods = {
      debug: console.debug,
      info: console.info,
      warn: console.warn,
      error: console.error
    };
    return methods[level];
  }
}

// Create and export singleton logger instance
export const logger = new Logger();

// Export Logger class for custom configurations
export { Logger };
export type { LogLevel, LoggerConfig };