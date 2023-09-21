import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStateDto } from '../dto/create-state.dto';
import { UpdateStateDto } from '../dto/update-state.dto';
import { State } from '../entities/state.entity';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(State)
    private statesRepository: Repository<State>,
  ) {}

  create(createStateDto: CreateStateDto) {
    return 'This action adds a new state';
  }

  findAll() {
    return `This action returns all states`;
  }

  findOne(id: string) {
    return `This action returns a #${id} state`;
  }

  update(id: string, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  remove(id: string) {
    return `This action removes a #${id} state`;
  }
}
