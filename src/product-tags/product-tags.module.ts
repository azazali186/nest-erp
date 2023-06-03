import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTagsService } from './product-tags.service';
import { ProductTagsController } from './product-tags.controller';
import { ProductTag } from './entities/product-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTag])],
  controllers: [ProductTagsController],
  providers: [ProductTagsService],
})
export class ProductTagsModule {}
