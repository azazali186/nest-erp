import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { PaymentMethod } from './entities/payment-method.entity';

@Injectable()
export class PaymentMethodsService {
  constructor(
    @InjectRepository(PaymentMethod)
    private paymentMethodsRepository: Repository<PaymentMethod>,
  ) {}

  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return 'This action adds a new paymentMethod';
  }

  findAll() {
    return `This action returns all paymentMethods`;
  }

  findOne(id: string) {
    return `This action returns a #${id} paymentMethod`;
  }

  update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return `This action updates a #${id} paymentMethod`;
  }

  remove(id: string) {
    return `This action removes a #${id} paymentMethod`;
  }
}
