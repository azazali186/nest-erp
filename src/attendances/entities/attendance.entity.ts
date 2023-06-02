/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Attendance {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    employeeId: string;
  
    @Column({type : 'date'})
    date: Date;
  
    @Column({type : 'timestamp'})
    inTime: string;

    @Column({type : 'timestamp'})
    outTime: string;
    
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: string;
  
    @UpdateDateColumn({
      type: 'timestamp',
      onUpdate: 'NOW()',
      nullable: true,
    })
    updatedAt: string;
}
