import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class LeaveApproval {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  leaveReason: string;

  @Column()
  numberOfLeaves: number;

  @Column()
  fromDate: string;

  @Column()
  toDate: string;

  @Column()
  statusId: string;

  @Column({ nullable: true })
  approverRemarks: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;
}
