import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeafDto } from '../dto/create-leaf.dto';
import { UpdateLeafDto } from '../dto/update-leaf.dto';
import { Leave } from '../entities/leave.entity';

@Injectable()
export class LeavesService {
  constructor(
    @InjectRepository(Leave)
    private leavesRepository: Repository<Leave>,
  ) {}

  create(createLeafDto: CreateLeafDto) {
    return 'This action adds a new leaf';
  }

  findAll() {
    return `This action returns all leaves`;
  }

  findOne(id: string) {
    return `This action returns a #${id} leaf`;
  }

  update(id: string, updateLeafDto: UpdateLeafDto) {
    return `This action updates a #${id} leaf`;
  }

  remove(id: string) {
    return `This action removes a #${id} leaf`;
  }
}
