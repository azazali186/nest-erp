import { Test, TestingModule } from '@nestjs/testing';
import { ProductAttributesService } from './product-attributes.service';

describe('ProductAttributesService', () => {
  let service: ProductAttributesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductAttributesService],
    }).compile();

    service = module.get<ProductAttributesService>(ProductAttributesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
