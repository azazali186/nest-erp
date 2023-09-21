import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from '../dto/create-report.dto';
import { UpdateReportDto } from '../dto/update-report.dto';
import { Report } from '../entities/report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportsRepository: Repository<Report>,
  ) {}

  create(createReportDto: CreateReportDto) {
    return 'This action adds a new report';
  }

  findAll() {
    return `This action returns all reports`;
  }

  findOne(id: string) {
    return `This action returns a #${id} report`;
  }

  update(id: string, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: string) {
    return `This action removes a #${id} report`;
  }
}
