import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeaveApprovalDto } from './dto/create-leave-approval.dto';
import { UpdateLeaveApprovalDto } from './dto/update-leave-approval.dto';
import { LeaveApproval } from './entities/leave-approval.entity';

@Injectable()
export class LeaveApprovalsService {
  constructor(
    @InjectRepository(LeaveApproval)
    private leaveApprovalsRepository: Repository<LeaveApproval>,
  ) {}

  create(createLeaveApprovalDto: CreateLeaveApprovalDto) {
    return 'This action adds a new leaveApproval';
  }

  findAll() {
    return `This action returns all leaveApprovals`;
  }

  findOne(id: string) {
    return `This action returns a #${id} leaveApproval`;
  }

  update(id: string, updateLeaveApprovalDto: UpdateLeaveApprovalDto) {
    return `This action updates a #${id} leaveApproval`;
  }

  remove(id: string) {
    return `This action removes a #${id} leaveApproval`;
  }
}
