import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum FileType {
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
  PDF = 'pdf',
  EXCEL = 'excel',
}

export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  imagableType: string;

  @Column()
  imagableId: string;

  @Column()
  path: string;

  @Column({
    type: 'enum',
    enum: FileType,
    default: FileType.IMAGE,
  })
  type: FileType;

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
