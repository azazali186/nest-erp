import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private EmployeesRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new Employee';
  }

  findAll() {
    return `This action returns all Employees`;
  }

  findOne(id: string) {
    return `This action returns a #${id} Employee`;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} Employee`;
  }

  remove(id: string) {
    return `This action removes a #${id} Employee`;
  }
}
