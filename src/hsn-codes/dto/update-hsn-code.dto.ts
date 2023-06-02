import { PartialType } from '@nestjs/mapped-types';
import { CreateHsnCodeDto } from './create-hsn-code.dto';

export class UpdateHsnCodeDto extends PartialType(CreateHsnCodeDto) {}
