import { Test, TestingModule } from '@nestjs/testing';
import { ProductStocksController } from './product-stocks.controller';
import { ProductStocksService } from './product-stocks.service';

describe('ProductStocksController', () => {
  let controller: ProductStocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductStocksController],
      providers: [ProductStocksService],
    }).compile();

    controller = module.get<ProductStocksController>(ProductStocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
