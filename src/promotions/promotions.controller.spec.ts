import { Test, TestingModule } from '@nestjs/testing';
import { PromotionsController } from './promotions.controller';
import { PromotionsService } from './promotions.service';

describe('PromotionsController', () => {
  let controller: PromotionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromotionsController],
      providers: [PromotionsService],
    }).compile();

    controller = module.get<PromotionsController>(PromotionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
