import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(Vendor)
    private vendorsRepository: Repository<Vendor>,
  ) {}

  create(createVendorDto: CreateVendorDto) {
    return 'This action adds a new vendor';
  }

  findAll() {
    return `This action returns all vendors`;
  }

  findOne(id: string) {
    return `This action returns a #${id} vendor`;
  }

  update(id: string, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: string) {
    return `This action removes a #${id} vendor`;
  }
}
