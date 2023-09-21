import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttributeValuesService } from '../services/attribute-values.service';
import { CreateAttributeValueDto } from '../dto/create-attribute-value.dto';
import { UpdateAttributeValueDto } from '../dto/update-attribute-value.dto';

@Controller('attribute-values')
export class AttributeValuesController {
  constructor(
    private readonly attributeValuesService: AttributeValuesService,
  ) {}

  @Post()
  create(@Body() createAttributeValueDto: CreateAttributeValueDto) {
    return this.attributeValuesService.create(createAttributeValueDto);
  }

  @Get()
  findAll() {
    return this.attributeValuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributeValuesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttributeValueDto: UpdateAttributeValueDto,
  ) {
    return this.attributeValuesService.update(id, updateAttributeValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attributeValuesService.remove(id);
  }
}
