import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private imagesRepository: Repository<Image>,
  ) {}

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  findAll() {
    return `This action returns all images`;
  }

  findOne(id: string) {
    return `This action returns a #${id} image`;
  }

  update(id: string, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: string) {
    return `This action removes a #${id} image`;
  }
}
