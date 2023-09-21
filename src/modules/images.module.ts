import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesService } from '../services/images.service';
import { ImagesController } from '../controllers/images.controller';
import { Image } from '../entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
