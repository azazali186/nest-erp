import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLanguageDto } from '../dto/create-language.dto';
import { UpdateLanguageDto } from '../dto/update-language.dto';
import { Language } from '../entities/language.entity';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(Language)
    private languagesRepository: Repository<Language>,
  ) {}

  create(createLanguageDto: CreateLanguageDto) {
    return 'This action adds a new language';
  }

  findAll() {
    return `This action returns all languages`;
  }

  findOne(id: string) {
    return `This action returns a #${id} language`;
  }

  update(id: string, updateLanguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: string) {
    return `This action removes a #${id} language`;
  }
}
