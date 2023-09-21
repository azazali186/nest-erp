import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from '../dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from '../dto/update-order-detail.dto';
import { OrderDetail } from '../entities/order-detail.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetail)
    private orderDetailsRepository: Repository<OrderDetail>,
  ) {}

  create(createOrderDetailDto: CreateOrderDetailDto) {
    return 'This action adds a new orderDetail';
  }

  findAll() {
    return `This action returns all orderDetails`;
  }

  findOne(id: string) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: string, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: string) {
    return `This action removes a #${id} orderDetail`;
  }
}
