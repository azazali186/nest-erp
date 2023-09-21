import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttributeValueDto } from '../dto/create-attribute-value.dto';
import { UpdateAttributeValueDto } from '../dto/update-attribute-value.dto';
import { AttributeValue } from '../entities/attribute-value.entity';

@Injectable()
export class AttributeValuesService {
  constructor(
    @InjectRepository(AttributeValue)
    private attributeValuesRepository: Repository<AttributeValue>,
  ) {}

  create(createAttributeValueDto: CreateAttributeValueDto) {
    return 'This action adds a new attributeValue';
  }

  findAll() {
    return `This action returns all attributeValues`;
  }

  findOne(id: string) {
    return `This action returns a #${id} attributeValue`;
  }

  update(id: string, updateAttributeValueDto: UpdateAttributeValueDto) {
    return `This action updates a #${id} attributeValue`;
  }

  remove(id: string) {
    return `This action removes a #${id} attributeValue`;
  }
}
