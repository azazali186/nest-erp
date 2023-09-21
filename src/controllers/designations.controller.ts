import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DesignationsService } from '../services/designations.service';
import { CreateDesignationDto } from '../dto/create-designation.dto';
import { UpdateDesignationDto } from '../dto/update-designation.dto';

@Controller('designations')
export class DesignationsController {
  constructor(private readonly designationsService: DesignationsService) {}

  @Post()
  create(@Body() createDesignationDto: CreateDesignationDto) {
    return this.designationsService.create(createDesignationDto);
  }

  @Get()
  findAll() {
    return this.designationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.designationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDesignationDto: UpdateDesignationDto,
  ) {
    return this.designationsService.update(id, updateDesignationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.designationsService.remove(id);
  }
}
