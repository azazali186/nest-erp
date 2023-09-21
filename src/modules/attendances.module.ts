import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendancesService } from '../services/attendances.service';
import { AttendancesController } from '../controllers/attendances.controller';
import { Attendance } from '../entities/attendance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attendance])],
  controllers: [AttendancesController],
  providers: [AttendancesService],
})
export class AttendancesModule {}
