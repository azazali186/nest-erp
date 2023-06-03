import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private statussRepository: Repository<Status>,
  ) {}

  create(createStatusDto: CreateStatusDto) {
    return 'This action adds a new status';
  }

  findAll() {
    return `This action returns all status`;
  }

  findOne(id: string) {
    return `This action returns a #${id} status`;
  }

  update(id: string, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  remove(id: string) {
    return `This action removes a #${id} status`;
  }
}
