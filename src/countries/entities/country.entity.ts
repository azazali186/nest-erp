import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cca3: string;

  @Column()
  cca2: string;

  @Column()
  idd: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  updatedAt: string;
}
