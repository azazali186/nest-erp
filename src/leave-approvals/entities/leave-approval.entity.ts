import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @Column({ nullable: true })
  approverRemarks: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    onUpdate: 'NOW()',
    nullable: true,
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;
}
