import { Module } from '@nestjs/common';
import { LoggersService } from './loggers.service';
import { LoggersController } from './loggers.controller';

@Module({
  controllers: [LoggersController],
  providers: [LoggersService]
})
export class LoggersModule {}
