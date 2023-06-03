import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeValuesService } from './attribute-values.service';
import { AttributeValuesController } from './attribute-values.controller';
import { AttributeValue } from './entities/attribute-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeValue])],
  controllers: [AttributeValuesController],
  providers: [AttributeValuesService],
})
export class AttributeValuesModule {}
