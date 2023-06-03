import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-Employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
