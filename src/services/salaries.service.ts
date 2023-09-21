import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalaryDto } from '../dto/create-salary.dto';
import { UpdateSalaryDto } from '../dto/update-salary.dto';
import { Salary } from '../entities/salary.entity';

@Injectable()
export class SalariesService {
  constructor(
    @InjectRepository(Salary)
    private salaryRepository: Repository<Salary>,
  ) {}

  create(createSalaryDto: CreateSalaryDto) {
    return 'This action adds a new salary';
  }

  findAll() {
    return `This action returns all salaries`;
  }

  findOne(id: string) {
    return `This action returns a #${id} salary`;
  }

  update(id: string, updateSalaryDto: UpdateSalaryDto) {
    return `This action updates a #${id} salary`;
  }

  remove(id: string) {
    return `This action removes a #${id} salary`;
  }
}
