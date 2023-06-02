import { Injectable } from '@nestjs/common';
import { CreateAttributeValueDto } from './dto/create-attribute-value.dto';
import { UpdateAttributeValueDto } from './dto/update-attribute-value.dto';

@Injectable()
export class AttributeValuesService {
  create(createAttributeValueDto: CreateAttributeValueDto) {
    return 'This action adds a new attributeValue';
  }

  findAll() {
    return `This action returns all attributeValues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributeValue`;
  }

  update(id: number, updateAttributeValueDto: UpdateAttributeValueDto) {
    return `This action updates a #${id} attributeValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributeValue`;
  }
}
