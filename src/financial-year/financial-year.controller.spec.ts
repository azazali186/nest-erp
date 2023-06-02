import { Test, TestingModule } from '@nestjs/testing';
import { FinancialYearController } from './financial-year.controller';
import { FinancialYearService } from './financial-year.service';

describe('FinancialYearController', () => {
  let controller: FinancialYearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialYearController],
      providers: [FinancialYearService],
    }).compile();

    controller = module.get<FinancialYearController>(FinancialYearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
