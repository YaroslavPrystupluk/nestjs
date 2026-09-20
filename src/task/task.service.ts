import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private logger = new Logger(TaskService.name);
  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    this.logger.log('Задача виконується кожні 10 секунд');
  }

  @Interval(1000)
  handleInterval() {
    this.logger.debug('Interval задача кожну секунду');
  }

  @Timeout(5000)
  handleTimeout() {
    this.logger.error('Timeout задача кожні 5 секунд після старта');
  }
}
