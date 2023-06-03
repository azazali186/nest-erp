import { PartialType } from '@nestjs/mapped-types';
import { CreateProductStockDto } from './create-product-stock.dto';

export class UpdateProductStockDto extends PartialType(CreateProductStockDto) {}
