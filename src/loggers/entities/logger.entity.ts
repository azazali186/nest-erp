import { Request } from 'express';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class AuditLogger {
  save() {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('longtext')
  data: string;

  @Column()
  method: string;

  @Column()
  host: string;

  @Column()
  userAgent: string;

  @Column()
  clientIP: string;

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
