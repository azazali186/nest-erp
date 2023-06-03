import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { UpdateDesignationDto } from './dto/update-designation.dto';
import { Designation } from './entities/designation.entity';

@Injectable()
export class DesignationsService {
  constructor(
    @InjectRepository(Designation)
    private designationsRepository: Repository<Designation>,
  ) {}

  create(createDesignationDto: CreateDesignationDto) {
    return 'This action adds a new designation';
  }

  findAll() {
    return `This action returns all designations`;
  }

  findOne(id: string) {
    return `This action returns a #${id} designation`;
  }

  update(id: string, updateDesignationDto: UpdateDesignationDto) {
    return `This action updates a #${id} designation`;
  }

  remove(id: string) {
    return `This action removes a #${id} designation`;
  }
}
