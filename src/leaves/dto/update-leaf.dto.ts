import { PartialType } from '@nestjs/mapped-types';
import { CreateLeafDto } from './create-leaf.dto';

export class UpdateLeafDto extends PartialType(CreateLeafDto) {}
