import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { Company } from '../entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companysRepository: Repository<Company>,
  ) {}

  create(createCompanyDto: CreateCompanyDto) {
    return 'This action adds a new company';
  }

  findAll() {
    return `This action returns all companies`;
  }

  findOne(id: string) {
    return `This action returns a #${id} company`;
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: string) {
    return `This action removes a #${id} company`;
  }
}
