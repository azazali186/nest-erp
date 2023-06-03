import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { Attribute } from './entities/attribute.entity';

@Injectable()
export class AttributesService {
  constructor(
    @InjectRepository(Attribute)
    private attributesRepository: Repository<Attribute>,
  ) {}

  create(createAttributeDto: CreateAttributeDto) {
    return 'This action adds a new attribute';
  }

  findAll() {
    return `This action returns all attributes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} attribute`;
  }

  update(id: string, updateAttributeDto: UpdateAttributeDto) {
    return `This action updates a #${id} attribute`;
  }

  remove(id: string) {
    return `This action removes a #${id} attribute`;
  }
}
