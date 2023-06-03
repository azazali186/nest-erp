import { Test, TestingModule } from '@nestjs/testing';
import { PincodeService } from './pincode.service';

describe('PincodeService', () => {
  let service: PincodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PincodeService],
    }).compile();

    service = module.get<PincodeService>(PincodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
