import { PartialType } from '@nestjs/mapped-types';
import { CreateProductTagDto } from './create-product-tag.dto';

export class UpdateProductTagDto extends PartialType(CreateProductTagDto) {}
