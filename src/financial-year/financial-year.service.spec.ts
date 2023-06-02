import { Test, TestingModule } from '@nestjs/testing';
import { FinancialYearService } from './financial-year.service';

describe('FinancialYearService', () => {
  let service: FinancialYearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialYearService],
    }).compile();

    service = module.get<FinancialYearService>(FinancialYearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
