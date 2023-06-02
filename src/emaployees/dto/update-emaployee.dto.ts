import { PartialType } from '@nestjs/mapped-types';
import { CreateEmaployeeDto } from './create-emaployee.dto';

export class UpdateEmaployeeDto extends PartialType(CreateEmaployeeDto) {}
