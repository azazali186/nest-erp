import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggersService } from '../services/loggers.service';
import { LoggersController } from '../controllers/loggers.controller';
import { AuditLogger } from '../entities/logger.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuditLogger])],
  controllers: [LoggersController],
  providers: [LoggersService],
})
export class LoggersModule {}
