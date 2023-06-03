/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class AttributeValue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  attributeId: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp',
    onUpdate: 'NOW()',
    nullable: true,
  })
  updatedAt: string;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: string;
}
