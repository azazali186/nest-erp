import { PartialType } from '@nestjs/mapped-types';
import { CreateProductPriceDto } from './create-product-price.dto';

export class UpdateProductPriceDto extends PartialType(CreateProductPriceDto) {}
