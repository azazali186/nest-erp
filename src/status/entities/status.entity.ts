import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum StatusTypes {
  UNIVERSAL = 'universal',
  ORDERS = 'orders',
  PAYMENTS = 'payments',
  SALARY = 'salary',
  LEAVE_APPROVALS = 'leave-approvals',
}

export class Status {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: StatusTypes.UNIVERSAL })
  type: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;
}
