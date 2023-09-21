import { PartialType } from '@nestjs/mapped-types';
import { CreateProductPromotionDto } from './create-product-promotion.dto';

export class UpdateProductPromotionDto extends PartialType(
  CreateProductPromotionDto,
) {}
