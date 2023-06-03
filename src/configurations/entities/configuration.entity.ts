import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ConfigurationType {
  CONFIGURATION = 'configuration',
  PAYMENT_METHOD = 'payment-method',
}

export class Configuration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  configurableId: string;

  @Column()
  configurableType: string;

  @Column()
  configuration: string;

  @Column({ default: ConfigurationType.CONFIGURATION, nullable: true })
  type: ConfigurationType;

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
