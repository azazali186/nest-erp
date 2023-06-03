import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  productId: string;

  @Column({ nullable: false })
  categoryIds: Array<string>;

  @Column({ nullable: true })
  subCategoryIds: Array<string>;

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
