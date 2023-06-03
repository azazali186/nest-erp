import { Test, TestingModule } from '@nestjs/testing';
import { ProductStocksService } from './product-stocks.service';

describe('ProductStocksService', () => {
  let service: ProductStocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductStocksService],
    }).compile();

    service = module.get<ProductStocksService>(ProductStocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
