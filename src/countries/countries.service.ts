import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countrysRepository: Repository<Country>,
  ) {}

  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  findAll() {
    return `This action returns all countries`;
  }

  findOne(id: string) {
    return `This action returns a #${id} country`;
  }

  update(id: string, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: string) {
    return `This action removes a #${id} country`;
  }
}
