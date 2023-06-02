import { Test, TestingModule } from '@nestjs/testing';
import { DesignationsController } from './designations.controller';
import { DesignationsService } from './designations.service';

describe('DesignationsController', () => {
  let controller: DesignationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesignationsController],
      providers: [DesignationsService],
    }).compile();

    controller = module.get<DesignationsController>(DesignationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
