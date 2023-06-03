import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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
