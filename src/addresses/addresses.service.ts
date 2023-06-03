import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  create(createAddressDto: CreateAddressDto) {
    return 'This action adds a new address';
  }

  findAll() {
    return `This action returns all addresses`;
  }

  findOne(id: string) {
    return `This action returns a #${id} address`;
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: string) {
    return `This action removes a #${id} address`;
  }
}
