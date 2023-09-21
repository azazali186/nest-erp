import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialYearService } from '../services/financial-year.service';
import { FinancialYearController } from '../controllers/financial-year.controller';
import { FinancialYear } from '../entities/financial-year.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialYear])],
  controllers: [FinancialYearController],
  providers: [FinancialYearService],
})
export class FinancialYearModule {}
