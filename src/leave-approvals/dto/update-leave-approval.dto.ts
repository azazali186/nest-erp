import { PartialType } from '@nestjs/mapped-types';
import { CreateLeaveApprovalDto } from './create-leave-approval.dto';

export class UpdateLeaveApprovalDto extends PartialType(
  CreateLeaveApprovalDto,
) {}
