import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaxRatesService } from '../services/tax-rates.service';
import { CreateTaxRateDto } from '../dto/create-tax-rate.dto';
import { UpdateTaxRateDto } from '../dto/update-tax-rate.dto';

@Controller('tax-rates')
export class TaxRatesController {
  constructor(private readonly taxRatesService: TaxRatesService) {}

  @Post()
  create(@Body() createTaxRateDto: CreateTaxRateDto) {
    return this.taxRatesService.create(createTaxRateDto);
  }

  @Get()
  findAll() {
    return this.taxRatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxRatesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxRateDto: UpdateTaxRateDto) {
    return this.taxRatesService.update(id, updateTaxRateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxRatesService.remove(id);
  }
}
