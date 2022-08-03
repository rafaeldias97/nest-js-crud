import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StatusEnum } from './enum/status.enum';

@Entity({ name: 'persons' })
export class PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({ name: 'name', nullable: false })
  @ApiProperty()
  name: string;

  @Column({ name: 'birth_date', type: 'timestamp', nullable: false })
  @ApiProperty()
  birthDate: string;

  @Column({ default: StatusEnum.INACTIVE })
  @ApiProperty()
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty()
  deletedAt: string;
}
