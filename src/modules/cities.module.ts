import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesService } from '../services/cities.service';
import { CitiesController } from '../controllers/cities.controller';
import { City } from '../entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
