import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialYearService } from './financial-year.service';
import { CreateFinancialYearDto } from './dto/create-financial-year.dto';
import { UpdateFinancialYearDto } from './dto/update-financial-year.dto';

@Controller('financial-year')
export class FinancialYearController {
  constructor(private readonly financialYearService: FinancialYearService) {}

  @Post()
  create(@Body() createFinancialYearDto: CreateFinancialYearDto) {
    return this.financialYearService.create(createFinancialYearDto);
  }

  @Get()
  findAll() {
    return this.financialYearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialYearService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancialYearDto: UpdateFinancialYearDto) {
    return this.financialYearService.update(+id, updateFinancialYearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialYearService.remove(+id);
  }
}
