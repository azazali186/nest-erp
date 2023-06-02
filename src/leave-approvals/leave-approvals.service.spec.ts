import { Test, TestingModule } from '@nestjs/testing';
import { LeaveApprovalsService } from './leave-approvals.service';

describe('LeaveApprovalsService', () => {
  let service: LeaveApprovalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaveApprovalsService],
    }).compile();

    service = module.get<LeaveApprovalsService>(LeaveApprovalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
