import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesService } from '../services/addresses.service';
import { AddressesController } from '../controllers/addresses.controller';
import { Address } from '../entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
