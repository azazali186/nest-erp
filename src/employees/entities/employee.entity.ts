import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  salary: string;

  @Column()
  currencyId: string;

  @Column()
  designationId: string;

  @Column()
  companyId: string;

  @Column({ nullable: true })
  reportingId: string;

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
