import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesService } from '../services/countries.service';
import { CountriesController } from '../controllers/countries.controller';
import { Country } from '../entities/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
