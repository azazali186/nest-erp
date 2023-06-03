import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Promotion } from './entities/promotion.entity';

@Injectable()
export class PromotionsService {
  constructor(
    @InjectRepository(Promotion)
    private promotionsRepository: Repository<Promotion>,
  ) {}

  create(createPromotionDto: CreatePromotionDto) {
    return 'This action adds a new promotion';
  }

  findAll() {
    return `This action returns all promotions`;
  }

  findOne(id: string) {
    return `This action returns a #${id} promotion`;
  }

  update(id: string, updatePromotionDto: UpdatePromotionDto) {
    return `This action updates a #${id} promotion`;
  }

  remove(id: string) {
    return `This action removes a #${id} promotion`;
  }
}
