import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHsnCodeDto } from '../dto/create-hsn-code.dto';
import { UpdateHsnCodeDto } from '../dto/update-hsn-code.dto';
import { HsnCode } from '../entities/hsn-code.entity';

@Injectable()
export class HsnCodesService {
  constructor(
    @InjectRepository(HsnCode)
    private hsnCodesRepository: Repository<HsnCode>,
  ) {}

  create(createHsnCodeDto: CreateHsnCodeDto) {
    return 'This action adds a new hsnCode';
  }

  findAll() {
    return `This action returns all hsnCodes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} hsnCode`;
  }

  update(id: string, updateHsnCodeDto: UpdateHsnCodeDto) {
    return `This action updates a #${id} hsnCode`;
  }

  remove(id: string) {
    return `This action removes a #${id} hsnCode`;
  }
}
