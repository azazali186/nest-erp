import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  productId: string;

  @Column({ default: 1 })
  quantity: number;

  @Column({ default: 1 })
  price: number;

  @Column({ default: 1 })
  totalPrice: number;

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
