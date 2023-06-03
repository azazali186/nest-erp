import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategoriesService } from './sub-categories.service';
import { SubCategoriesController } from './sub-categories.controller';
import { SubCategory } from './entities/sub-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategory])],
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService],
})
export class SubCategoriesModule {}
