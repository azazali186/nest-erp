import { Injectable } from '@nestjs/common';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { UpdateDesignationDto } from './dto/update-designation.dto';

@Injectable()
export class DesignationsService {
  create(createDesignationDto: CreateDesignationDto) {
    return 'This action adds a new designation';
  }

  findAll() {
    return `This action returns all designations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} designation`;
  }

  update(id: number, updateDesignationDto: UpdateDesignationDto) {
    return `This action updates a #${id} designation`;
  }

  remove(id: number) {
    return `This action removes a #${id} designation`;
  }
}
