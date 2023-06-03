import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductAttributesService } from './product-attributes.service';
import { CreateProductAttributeDto } from './dto/create-product-attribute.dto';
import { UpdateProductAttributeDto } from './dto/update-product-attribute.dto';

@Controller('product-attributes')
export class ProductAttributesController {
  constructor(
    private readonly productAttributesService: ProductAttributesService,
  ) {}

  @Post()
  create(@Body() createProductAttributeDto: CreateProductAttributeDto) {
    return this.productAttributesService.create(createProductAttributeDto);
  }

  @Get()
  findAll() {
    return this.productAttributesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productAttributesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductAttributeDto: UpdateProductAttributeDto,
  ) {
    return this.productAttributesService.update(id, updateProductAttributeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productAttributesService.remove(id);
  }
}
