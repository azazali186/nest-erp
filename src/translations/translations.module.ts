import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TranslationsService } from './translations.service';
import { TranslationsController } from './translations.controller';
import { Translation } from './entities/translation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Translation])],
  controllers: [TranslationsController],
  providers: [TranslationsService],
})
export class TranslationsModule {}
