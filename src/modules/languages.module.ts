import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguagesService } from '../services/languages.service';
import { LanguagesController } from '../controllers/languages.controller';
import { Language } from '../entities/language.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  controllers: [LanguagesController],
  providers: [LanguagesService],
})
export class LanguagesModule {}
