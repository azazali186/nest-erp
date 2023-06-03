import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { State } from './entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {}
