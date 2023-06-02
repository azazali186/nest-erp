/* eslint-disable prettier/prettier */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class Vendor {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  
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
  
  }
  