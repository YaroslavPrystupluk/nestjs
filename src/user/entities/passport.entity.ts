import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  type Relation,
} from 'typeorm';
import { UserEntity } from './user.entity.js';

@Entity({ name: 'passport_user' })
export class PassportUserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 8 })
  series: string;

  @OneToOne(() => UserEntity, (user) => user.passport)
  user: Relation<UserEntity>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
