import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveApprovalsService } from './leave-approvals.service';
import { LeaveApprovalsController } from './leave-approvals.controller';
import { LeaveApproval } from './entities/leave-approval.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeaveApproval])],
  controllers: [LeaveApprovalsController],
  providers: [LeaveApprovalsService],
})
export class LeaveApprovalsModule {}
