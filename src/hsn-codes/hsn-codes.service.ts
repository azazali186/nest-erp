import { Injectable } from '@nestjs/common';
import { CreateHsnCodeDto } from './dto/create-hsn-code.dto';
import { UpdateHsnCodeDto } from './dto/update-hsn-code.dto';

@Injectable()
export class HsnCodesService {
  create(createHsnCodeDto: CreateHsnCodeDto) {
    return 'This action adds a new hsnCode';
  }

  findAll() {
    return `This action returns all hsnCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hsnCode`;
  }

  update(id: number, updateHsnCodeDto: UpdateHsnCodeDto) {
    return `This action updates a #${id} hsnCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} hsnCode`;
  }
}
