import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxRatesService } from './tax-rates.service';
import { TaxRatesController } from './tax-rates.controller';
import { TaxRate } from './entities/tax-rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxRate])],
  controllers: [TaxRatesController],
  providers: [TaxRatesService],
})
export class TaxRatesModule {}
