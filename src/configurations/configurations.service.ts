import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { Configuration } from './entities/configuration.entity';

@Injectable()
export class ConfigurationsService {
  constructor(
    @InjectRepository(Configuration)
    private configurationsRepository: Repository<Configuration>,
  ) {}

  create(createConfigurationDto: CreateConfigurationDto) {
    return 'This action adds a new configuration';
  }

  findAll() {
    return `This action returns all configurations`;
  }

  findOne(id: string) {
    return `This action returns a #${id} configuration`;
  }

  update(id: string, updateConfigurationDto: UpdateConfigurationDto) {
    return `This action updates a #${id} configuration`;
  }

  remove(id: string) {
    return `This action removes a #${id} configuration`;
  }
}
