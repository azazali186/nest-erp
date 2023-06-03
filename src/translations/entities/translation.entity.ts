import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Translation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  transalatableType: string;

  @Column()
  transalatableId: string;

  @Column()
  languageId: string;

  @Column()
  fieldName: string;

  @Column({ type: 'longtext' })
  translations: string;

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
