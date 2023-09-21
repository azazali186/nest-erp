import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
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

  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;
}
