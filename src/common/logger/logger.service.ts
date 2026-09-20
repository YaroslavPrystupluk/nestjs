import { ConsoleLogger, LoggerService, LogLevel } from '@nestjs/common';
import { appendFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

export class CustomLogger implements LoggerService {
  private readonly logFile = join(process.cwd(), 'logs/app.logs');
  private readonly consoleLogger = new ConsoleLogger();

  log(message: any, context: string) {
    this.writeToLog('log', message, context);
    this.consoleLogger.log(message, context);
  }

  warn(message: any, context: string) {
    this.writeToLog('warn', message, context);
    this.consoleLogger.warn(message, context);
  }

  error(message: any, context: string, trace?: string) {
    this.writeToLog('error', message, context, trace);
    this.consoleLogger.error(message, context, trace);
  }

  debug(message: any, context: string) {
    this.writeToLog('debug', message, context);
    this.consoleLogger.error(message, context);
  }

  verbose(message: any, context: string) {
    this.writeToLog('verbose', message, context);
    this.consoleLogger.verbose(message, context);
  }

  fatal(message: any, context: string, trace?: string) {
    this.writeToLog('fatal', message, context, trace);
    this.consoleLogger.fatal(message, context, trace);
  }

  private writeToLog(
    level: LogLevel,
    message: any,
    context?: string,
    trace?: string,
  ) {
    const time = new Date().toISOString;
    const log = `[${time}]${context ? `[${context}]` : ''} ${message} ${trace ? `\nTRACE ${trace}` : ''}\n`;

    const logDir = dirname(this.logFile);

    if (!existsSync(logDir)) {
      mkdirSync(logDir, { recursive: true });
    }

    appendFileSync(this.logFile, log);
  }
}
