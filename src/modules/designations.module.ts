import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesignationsService } from '../services/designations.service';
import { DesignationsController } from '../controllers/designations.controller';
import { Designation } from '../entities/designation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Designation])],
  controllers: [DesignationsController],
  providers: [DesignationsService],
})
export class DesignationsModule {}
