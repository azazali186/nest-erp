import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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
