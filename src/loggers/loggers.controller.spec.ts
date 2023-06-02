import { Test, TestingModule } from '@nestjs/testing';
import { LoggersController } from './loggers.controller';
import { LoggersService } from './loggers.service';

describe('LoggersController', () => {
  let controller: LoggersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoggersController],
      providers: [LoggersService],
    }).compile();

    controller = module.get<LoggersController>(LoggersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
