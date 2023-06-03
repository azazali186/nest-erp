import { Test, TestingModule } from '@nestjs/testing';
import { ProductPromotionsController } from './product-promotions.controller';
import { ProductPromotionsService } from './product-promotions.service';

describe('ProductPromotionsController', () => {
  let controller: ProductPromotionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductPromotionsController],
      providers: [ProductPromotionsService],
    }).compile();

    controller = module.get<ProductPromotionsController>(ProductPromotionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
