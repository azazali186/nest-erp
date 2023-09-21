/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: null, nullable: true })
  name: string;

  @Column({ default: null, nullable: true })
  contactNumber: string;

  @Column({ nullable: true })
  cidyId: string;

  @Column({ nullable: true })
  stateId: string;

  @Column({ nullable: true })
  countryId: string;

  @Column({ default: null, nullable: true })
  pincode: string;

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
