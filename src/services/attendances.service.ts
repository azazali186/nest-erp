import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttendanceDto } from '../dto/create-attendance.dto';
import { UpdateAttendanceDto } from '../dto/update-attendance.dto';
import { Attendance } from '../entities/attendance.entity';

@Injectable()
export class AttendancesService {
  constructor(
    @InjectRepository(Attendance)
    private attenanceRepository: Repository<Attendance>,
  ) {}

  create(createAttendanceDto: CreateAttendanceDto) {
    return 'This action adds a new attendance';
  }

  findAll() {
    return `This action returns all attendances`;
  }

  findOne(id: string) {
    return `This action returns a #${id} attendance`;
  }

  update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    return `This action updates a #${id} attendance`;
  }

  remove(id: string) {
    return `This action removes a #${id} attendance`;
  }
}
