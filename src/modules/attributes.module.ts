import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributesService } from '../services/attributes.service';
import { AttributesController } from '../controllers/attributes.controller';
import { Attribute } from '../entities/attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attribute])],
  controllers: [AttributesController],
  providers: [AttributesService],
})
export class AttributesModule {}
