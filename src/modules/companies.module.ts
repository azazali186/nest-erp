import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesService } from '../services/companies.service';
import { CompaniesController } from '../controllers/companies.controller';
import { Company } from '../entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
