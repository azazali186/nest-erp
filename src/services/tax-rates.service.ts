import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaxRateDto } from '../dto/create-tax-rate.dto';
import { UpdateTaxRateDto } from '../dto/update-tax-rate.dto';
import { TaxRate } from '../entities/tax-rate.entity';

@Injectable()
export class TaxRatesService {
  constructor(
    @InjectRepository(TaxRate)
    private taxRateRepository: Repository<TaxRate>,
  ) {}

  create(createTaxRateDto: CreateTaxRateDto) {
    return 'This action adds a new taxRate';
  }

  findAll() {
    return `This action returns all taxRates`;
  }

  findOne(id: string) {
    return `This action returns a #${id} taxRate`;
  }

  update(id: string, updateTaxRateDto: UpdateTaxRateDto) {
    return `This action updates a #${id} taxRate`;
  }

  remove(id: string) {
    return `This action removes a #${id} taxRate`;
  }
}
