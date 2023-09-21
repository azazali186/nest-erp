import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
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

  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;
}
