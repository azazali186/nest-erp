import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalariesService } from './salaries.service';
import { SalariesController } from './salaries.controller';
import { Salary } from './entities/salary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Salary])],
  controllers: [SalariesController],
  providers: [SalariesService],
})
export class SalariesModule {}
