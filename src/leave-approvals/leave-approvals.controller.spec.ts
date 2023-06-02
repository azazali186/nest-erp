import { Test, TestingModule } from '@nestjs/testing';
import { LeaveApprovalsController } from './leave-approvals.controller';
import { LeaveApprovalsService } from './leave-approvals.service';

describe('LeaveApprovalsController', () => {
  let controller: LeaveApprovalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeaveApprovalsController],
      providers: [LeaveApprovalsService],
    }).compile();

    controller = module.get<LeaveApprovalsController>(LeaveApprovalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
