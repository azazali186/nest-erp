import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeavesService } from './leaves.service';
import { LeavesController } from './leaves.controller';
import { Leave } from './entities/leave.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Leave])],
  controllers: [LeavesController],
  providers: [LeavesService],
})
export class LeavesModule {}
