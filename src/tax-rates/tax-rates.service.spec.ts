import { Test, TestingModule } from '@nestjs/testing';
import { TaxRatesService } from './tax-rates.service';

describe('TaxRatesService', () => {
  let service: TaxRatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxRatesService],
    }).compile();

    service = module.get<TaxRatesService>(TaxRatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
