import { Injectable } from '@nestjs/common';
import { CreateLeaveApprovalDto } from './dto/create-leave-approval.dto';
import { UpdateLeaveApprovalDto } from './dto/update-leave-approval.dto';

@Injectable()
export class LeaveApprovalsService {
  create(createLeaveApprovalDto: CreateLeaveApprovalDto) {
    return 'This action adds a new leaveApproval';
  }

  findAll() {
    return `This action returns all leaveApprovals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leaveApproval`;
  }

  update(id: number, updateLeaveApprovalDto: UpdateLeaveApprovalDto) {
    return `This action updates a #${id} leaveApproval`;
  }

  remove(id: number) {
    return `This action removes a #${id} leaveApproval`;
  }
}
