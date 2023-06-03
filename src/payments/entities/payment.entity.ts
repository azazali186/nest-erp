import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orderId: string;

  @Column()
  totalAmount: string;

  @Column()
  request: string;

  @Column()
  response: string;

  @Column()
  finalResponse: string;

  @Column()
  paymentStatus: string;

  @Column()
  statusId: string;

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
