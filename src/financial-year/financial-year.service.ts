import { Injectable } from '@nestjs/common';
import { CreateFinancialYearDto } from './dto/create-financial-year.dto';
import { UpdateFinancialYearDto } from './dto/update-financial-year.dto';

@Injectable()
export class FinancialYearService {
  create(createFinancialYearDto: CreateFinancialYearDto) {
    return 'This action adds a new financialYear';
  }

  findAll() {
    return `This action returns all financialYear`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialYear`;
  }

  update(id: number, updateFinancialYearDto: UpdateFinancialYearDto) {
    return `This action updates a #${id} financialYear`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialYear`;
  }
}
