import { Test, TestingModule } from '@nestjs/testing';
import { ProductAttributesController } from './product-attributes.controller';
import { ProductAttributesService } from './product-attributes.service';

describe('ProductAttributesController', () => {
  let controller: ProductAttributesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductAttributesController],
      providers: [ProductAttributesService],
    }).compile();

    controller = module.get<ProductAttributesController>(ProductAttributesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
