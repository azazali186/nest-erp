import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { SubCategory } from './entities/sub-category.entity';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectRepository(SubCategory)
    private subCategorysRepository: Repository<SubCategory>,
  ) {}

  create(createSubCategoryDto: CreateSubCategoryDto) {
    return 'This action adds a new subCategory';
  }

  findAll() {
    return `This action returns all subCategories`;
  }

  findOne(id: string) {
    return `This action returns a #${id} subCategory`;
  }

  update(id: string, updateSubCategoryDto: UpdateSubCategoryDto) {
    return `This action updates a #${id} subCategory`;
  }

  remove(id: string) {
    return `This action removes a #${id} subCategory`;
  }
}
