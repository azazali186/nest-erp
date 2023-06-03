import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoggerDto } from './dto/create-logger.dto';
import { UpdateLoggerDto } from './dto/update-logger.dto';
import { AuditLogger } from './entities/logger.entity';

@Injectable()
export class LoggersService {
  constructor(
    @InjectRepository(AuditLogger)
    private loggerRepository: Repository<AuditLogger>,
  ) {}

  create(createLoggerDto: CreateLoggerDto) {
    return 'This action adds a new logger';
  }

  findAll() {
    return `This action returns all loggers`;
  }

  findOne(id: string) {
    return `This action returns a #${id} logger`;
  }

  update(id: string, updateLoggerDto: UpdateLoggerDto) {
    return `This action updates a #${id} logger`;
  }

  remove(id: string) {
    return `This action removes a #${id} logger`;
  }
}
