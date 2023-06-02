import { Test, TestingModule } from '@nestjs/testing';
import { LoggersService } from './loggers.service';

describe('LoggersService', () => {
  let service: LoggersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggersService],
    }).compile();

    service = module.get<LoggersService>(LoggersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
