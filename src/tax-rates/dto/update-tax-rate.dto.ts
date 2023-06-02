import { PartialType } from '@nestjs/mapped-types';
import { CreateTaxRateDto } from './create-tax-rate.dto';

export class UpdateTaxRateDto extends PartialType(CreateTaxRateDto) {}
