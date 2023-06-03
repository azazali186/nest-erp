import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoggersService } from './loggers.service';
import { CreateLoggerDto } from './dto/create-logger.dto';
import { UpdateLoggerDto } from './dto/update-logger.dto';

@Controller('loggers')
export class LoggersController {
  constructor(private readonly loggersService: LoggersService) {}

  @Post()
  create(@Body() createLoggerDto: CreateLoggerDto) {
    return this.loggersService.create(createLoggerDto);
  }

  @Get()
  findAll() {
    return this.loggersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loggersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoggerDto: UpdateLoggerDto) {
    return this.loggersService.update(id, updateLoggerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loggersService.remove(id);
  }
}
