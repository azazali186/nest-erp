import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesignationsService } from './designations.service';
import { DesignationsController } from './designations.controller';
import { Designation } from './entities/designation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Designation])],
  controllers: [DesignationsController],
  providers: [DesignationsService],
})
export class DesignationsModule {}
