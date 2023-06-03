import { Test, TestingModule } from '@nestjs/testing';
import { ProductPromotionsService } from './product-promotions.service';

describe('ProductPromotionsService', () => {
  let service: ProductPromotionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductPromotionsService],
    }).compile();

    service = module.get<ProductPromotionsService>(ProductPromotionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
