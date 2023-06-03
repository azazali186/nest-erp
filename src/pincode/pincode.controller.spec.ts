import { Test, TestingModule } from '@nestjs/testing';
import { PincodeController } from './pincode.controller';
import { PincodeService } from './pincode.service';

describe('PincodeController', () => {
  let controller: PincodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PincodeController],
      providers: [PincodeService],
    }).compile();

    controller = module.get<PincodeController>(PincodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
