import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  isAttributed: boolean;

  @Column({ default: false })
  isDownloadable: boolean;

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
