import { Module } from '@nestjs/common';
import { LeaveApprovalsService } from './leave-approvals.service';
import { LeaveApprovalsController } from './leave-approvals.controller';

@Module({
  controllers: [LeaveApprovalsController],
  providers: [LeaveApprovalsService]
})
export class LeaveApprovalsModule {}
