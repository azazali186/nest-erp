import { Injectable } from '@nestjs/common';
import { CreateTaxRateDto } from './dto/create-tax-rate.dto';
import { UpdateTaxRateDto } from './dto/update-tax-rate.dto';

@Injectable()
export class TaxRatesService {
  create(createTaxRateDto: CreateTaxRateDto) {
    return 'This action adds a new taxRate';
  }

  findAll() {
    return `This action returns all taxRates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxRate`;
  }

  update(id: number, updateTaxRateDto: UpdateTaxRateDto) {
    return `This action updates a #${id} taxRate`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxRate`;
  }
}
