import { Test, TestingModule } from '@nestjs/testing';
import { HsnCodesService } from './hsn-codes.service';

describe('HsnCodesService', () => {
  let service: HsnCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HsnCodesService],
    }).compile();

    service = module.get<HsnCodesService>(HsnCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
