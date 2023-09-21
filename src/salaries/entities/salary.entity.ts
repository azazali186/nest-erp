import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Salary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  employeeId: string;

  @Column()
  salary: string;

  @Column()
  date: string;

  @Column()
  financialYearId: string;

  @Column()
  days: string;

  @Column()
  absents: string;

  @Column()
  presents: string;

  @Column()
  calculatedSalary: string;

  @Column()
  statusId: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;
}
