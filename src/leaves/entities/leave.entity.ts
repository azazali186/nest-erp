import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Leave {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 18 })
  annual: number;

  @Column({ default: 0 })
  carryForwarded: number;

  @Column({ default: 0 })
  total: number;

  @Column({ default: 18 })
  available: number;

  @Column({ default: 0 })
  claimed: number;

  @Column()
  financialYearId: string;

  @Column()
  EmployeeId: string;

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
