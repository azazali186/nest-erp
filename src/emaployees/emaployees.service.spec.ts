import { Test, TestingModule } from '@nestjs/testing';
import { EmaployeesService } from './emaployees.service';

describe('EmaployeesService', () => {
  let service: EmaployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmaployeesService],
    }).compile();

    service = module.get<EmaployeesService>(EmaployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
