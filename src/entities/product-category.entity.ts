import { Category } from 'src/entities/category.entity';
import { Product } from 'src/entities/product.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, (product) => product.productCategories)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @ManyToOne(() => Category, (category) => category.productCategories)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;
}
