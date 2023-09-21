import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePincodeDto } from '../dto/create-pincode.dto';
import { UpdatePincodeDto } from '../dto/update-pincode.dto';
import { Pincode } from '../entities/pincode.entity';

@Injectable()
export class PincodeService {
  constructor(
    @InjectRepository(Pincode)
    private pincodesRepository: Repository<Pincode>,
  ) {}

  create(createPincodeDto: CreatePincodeDto) {
    return 'This action adds a new pincode';
  }

  findAll() {
    return `This action returns all pincode`;
  }

  findOne(id: string) {
    return `This action returns a #${id} pincode`;
  }

  update(id: string, updatePincodeDto: UpdatePincodeDto) {
    return `This action updates a #${id} pincode`;
  }

  remove(id: string) {
    return `This action removes a #${id} pincode`;
  }
}
