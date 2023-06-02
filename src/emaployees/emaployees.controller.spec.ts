import { Test, TestingModule } from '@nestjs/testing';
import { EmaployeesController } from './emaployees.controller';
import { EmaployeesService } from './emaployees.service';

describe('EmaployeesController', () => {
  let controller: EmaployeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmaployeesController],
      providers: [EmaployeesService],
    }).compile();

    controller = module.get<EmaployeesController>(EmaployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
