/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
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

  updatedAt: string;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: string;
}
