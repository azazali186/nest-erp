import { PartialType } from '@nestjs/mapped-types';
import { CreatePincodeDto } from './create-pincode.dto';

export class UpdatePincodeDto extends PartialType(CreatePincodeDto) {}
