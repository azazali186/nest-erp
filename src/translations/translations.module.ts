import { Module } from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { TranslationsController } from './translations.controller';

@Module({
  controllers: [TranslationsController],
  providers: [TranslationsService]
})
export class TranslationsModule {}
