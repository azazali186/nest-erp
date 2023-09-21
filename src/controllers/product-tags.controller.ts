import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductTagsService } from '../services/product-tags.service';
import { CreateProductTagDto } from '../dto/create-product-tag.dto';
import { UpdateProductTagDto } from '../dto/update-product-tag.dto';

@Controller('product-tags')
export class ProductTagsController {
  constructor(private readonly productTagsService: ProductTagsService) {}

  @Post()
  create(@Body() createProductTagDto: CreateProductTagDto) {
    return this.productTagsService.create(createProductTagDto);
  }

  @Get()
  findAll() {
    return this.productTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTagsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductTagDto: UpdateProductTagDto,
  ) {
    return this.productTagsService.update(id, updateProductTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTagsService.remove(id);
  }
}
