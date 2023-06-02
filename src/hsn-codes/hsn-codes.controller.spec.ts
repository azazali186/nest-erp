import { Test, TestingModule } from '@nestjs/testing';
import { HsnCodesController } from './hsn-codes.controller';
import { HsnCodesService } from './hsn-codes.service';

describe('HsnCodesController', () => {
  let controller: HsnCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HsnCodesController],
      providers: [HsnCodesService],
    }).compile();

    controller = module.get<HsnCodesController>(HsnCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
