/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-Employee.dto';
import { UpdateEmployeeDto } from './dto/update-Employee.dto';

@Controller('Employees')
export class EmployeesController {
  constructor(private readonly EmployeesService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.EmployeesService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.EmployeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.EmployeesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.EmployeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.EmployeesService.remove(id);
  }
}
