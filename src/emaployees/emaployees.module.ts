import { Module } from '@nestjs/common';
import { EmaployeesService } from './emaployees.service';
import { EmaployeesController } from './emaployees.controller';

@Module({
  controllers: [EmaployeesController],
  providers: [EmaployeesService]
})
export class EmaployeesModule {}
