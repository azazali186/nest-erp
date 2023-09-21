import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
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

  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;
}
