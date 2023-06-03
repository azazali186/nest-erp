import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';
import { Translation } from './entities/translation.entity';

@Injectable()
export class TranslationsService {
  constructor(
    @InjectRepository(Translation)
    private translationsRepository: Repository<Translation>,
  ) {}

  create(createTranslationDto: CreateTranslationDto) {
    return 'This action adds a new translation';
  }

  findAll() {
    return `This action returns all translations`;
  }

  findOne(id: string) {
    return `This action returns a #${id} translation`;
  }

  update(id: string, updateTranslationDto: UpdateTranslationDto) {
    return `This action updates a #${id} translation`;
  }

  remove(id: string) {
    return `This action removes a #${id} translation`;
  }
}
