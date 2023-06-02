import { Module } from '@nestjs/common';
import { SalariesService } from './salaries.service';
import { SalariesController } from './salaries.controller';

@Module({
  controllers: [SalariesController],
  providers: [SalariesService]
})
export class SalariesModule {}
