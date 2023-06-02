import { Injectable } from '@nestjs/common';
import { CreateEmaployeeDto } from './dto/create-emaployee.dto';
import { UpdateEmaployeeDto } from './dto/update-emaployee.dto';

@Injectable()
export class EmaployeesService {
  create(createEmaployeeDto: CreateEmaployeeDto) {
    return 'This action adds a new emaployee';
  }

  findAll() {
    return `This action returns all emaployees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emaployee`;
  }

  update(id: number, updateEmaployeeDto: UpdateEmaployeeDto) {
    return `This action updates a #${id} emaployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} emaployee`;
  }
}
