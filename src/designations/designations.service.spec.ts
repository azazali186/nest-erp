import { Test, TestingModule } from '@nestjs/testing';
import { DesignationsService } from './designations.service';

describe('DesignationsService', () => {
  let service: DesignationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesignationsService],
    }).compile();

    service = module.get<DesignationsService>(DesignationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
