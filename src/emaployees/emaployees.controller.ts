import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmaployeesService } from './emaployees.service';
import { CreateEmaployeeDto } from './dto/create-emaployee.dto';
import { UpdateEmaployeeDto } from './dto/update-emaployee.dto';

@Controller('emaployees')
export class EmaployeesController {
  constructor(private readonly emaployeesService: EmaployeesService) {}

  @Post()
  create(@Body() createEmaployeeDto: CreateEmaployeeDto) {
    return this.emaployeesService.create(createEmaployeeDto);
  }

  @Get()
  findAll() {
    return this.emaployeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emaployeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmaployeeDto: UpdateEmaployeeDto) {
    return this.emaployeesService.update(+id, updateEmaployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emaployeesService.remove(+id);
  }
}
