import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsService } from '../services/configurations.service';
import { ConfigurationsController } from '../controllers/configurations.controller';
import { Configuration } from '../entities/configuration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Configuration])],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService],
})
export class ConfigurationsModule {}
