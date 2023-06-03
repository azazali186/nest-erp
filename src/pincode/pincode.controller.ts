import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PincodeService } from './pincode.service';
import { CreatePincodeDto } from './dto/create-pincode.dto';
import { UpdatePincodeDto } from './dto/update-pincode.dto';

@Controller('pincode')
export class PincodeController {
  constructor(private readonly pincodeService: PincodeService) {}

  @Post()
  create(@Body() createPincodeDto: CreatePincodeDto) {
    return this.pincodeService.create(createPincodeDto);
  }

  @Get()
  findAll() {
    return this.pincodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pincodeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePincodeDto: UpdatePincodeDto) {
    return this.pincodeService.update(id, updatePincodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pincodeService.remove(id);
  }
}
