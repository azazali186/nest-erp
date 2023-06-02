import { Module } from '@nestjs/common';
import { AttributeValuesService } from './attribute-values.service';
import { AttributeValuesController } from './attribute-values.controller';

@Module({
  controllers: [AttributeValuesController],
  providers: [AttributeValuesService]
})
export class AttributeValuesModule {}
