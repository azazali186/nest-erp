import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LeaveApprovalsService } from './leave-approvals.service';
import { CreateLeaveApprovalDto } from './dto/create-leave-approval.dto';
import { UpdateLeaveApprovalDto } from './dto/update-leave-approval.dto';

@Controller('leave-approvals')
export class LeaveApprovalsController {
  constructor(private readonly leaveApprovalsService: LeaveApprovalsService) {}

  @Post()
  create(@Body() createLeaveApprovalDto: CreateLeaveApprovalDto) {
    return this.leaveApprovalsService.create(createLeaveApprovalDto);
  }

  @Get()
  findAll() {
    return this.leaveApprovalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaveApprovalsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLeaveApprovalDto: UpdateLeaveApprovalDto,
  ) {
    return this.leaveApprovalsService.update(id, updateLeaveApprovalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaveApprovalsService.remove(id);
  }
}
