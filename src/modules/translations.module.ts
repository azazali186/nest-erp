import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TranslationsService } from '../services/translations.service';
import { TranslationsController } from '../controllers/translations.controller';
import { Translation } from '../entities/translation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Translation])],
  controllers: [TranslationsController],
  providers: [TranslationsService],
})
export class TranslationsModule {}
