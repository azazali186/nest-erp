import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFinancialYearDto } from '../dto/create-financial-year.dto';
import { UpdateFinancialYearDto } from '../dto/update-financial-year.dto';
import { FinancialYear } from '../entities/financial-year.entity';

@Injectable()
export class FinancialYearService {
  constructor(
    @InjectRepository(FinancialYear)
    private financialYearsRepository: Repository<FinancialYear>,
  ) {}

  create(createFinancialYearDto: CreateFinancialYearDto) {
    return 'This action adds a new financialYear';
  }

  findAll() {
    return `This action returns all financialYear`;
  }

  findOne(id: string) {
    return `This action returns a #${id} financialYear`;
  }

  update(id: string, updateFinancialYearDto: UpdateFinancialYearDto) {
    return `This action updates a #${id} financialYear`;
  }

  remove(id: string) {
    return `This action removes a #${id} financialYear`;
  }
}
