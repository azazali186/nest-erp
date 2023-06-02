import { Test, TestingModule } from '@nestjs/testing';
import { SalariesController } from './salaries.controller';
import { SalariesService } from './salaries.service';

describe('SalariesController', () => {
  let controller: SalariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalariesController],
      providers: [SalariesService],
    }).compile();

    controller = module.get<SalariesController>(SalariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
