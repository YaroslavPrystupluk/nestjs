import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    console.log('Задача виконується кожні 10 секунд');
  }

  @Interval(1000)
  handleInterval() {
    console.log('Interval задача кожну секунду');
  }

  @Timeout(5000)
  handleTimeout() {
    console.log('Timeout задача кожні 5 секунд після старта');
  }
}
