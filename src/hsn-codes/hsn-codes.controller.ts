import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HsnCodesService } from './hsn-codes.service';
import { CreateHsnCodeDto } from './dto/create-hsn-code.dto';
import { UpdateHsnCodeDto } from './dto/update-hsn-code.dto';

@Controller('hsn-codes')
export class HsnCodesController {
  constructor(private readonly hsnCodesService: HsnCodesService) {}

  @Post()
  create(@Body() createHsnCodeDto: CreateHsnCodeDto) {
    return this.hsnCodesService.create(createHsnCodeDto);
  }

  @Get()
  findAll() {
    return this.hsnCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hsnCodesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHsnCodeDto: UpdateHsnCodeDto) {
    return this.hsnCodesService.update(id, updateHsnCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hsnCodesService.remove(id);
  }
}
