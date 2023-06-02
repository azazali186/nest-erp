import { Injectable } from '@nestjs/common';
import { CreateLeafDto } from './dto/create-leaf.dto';
import { UpdateLeafDto } from './dto/update-leaf.dto';

@Injectable()
export class LeavesService {
  create(createLeafDto: CreateLeafDto) {
    return 'This action adds a new leaf';
  }

  findAll() {
    return `This action returns all leaves`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leaf`;
  }

  update(id: number, updateLeafDto: UpdateLeafDto) {
    return `This action updates a #${id} leaf`;
  }

  remove(id: number) {
    return `This action removes a #${id} leaf`;
  }
}
