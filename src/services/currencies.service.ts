import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCurrencyDto } from '../dto/create-currency.dto';
import { UpdateCurrencyDto } from '../dto/update-currency.dto';
import { Currency } from '../entities/currency.entity';

@Injectable()
export class CurrenciesService {
  constructor(
    @InjectRepository(Currency)
    private currencysRepository: Repository<Currency>,
  ) {}

  create(createCurrencyDto: CreateCurrencyDto) {
    return 'This action adds a new currency';
  }

  findAll() {
    return `This action returns all currencies`;
  }

  findOne(id: string) {
    return `This action returns a #${id} currency`;
  }

  update(id: string, updateCurrencyDto: UpdateCurrencyDto) {
    return `This action updates a #${id} currency`;
  }

  remove(id: string) {
    return `This action removes a #${id} currency`;
  }
}
