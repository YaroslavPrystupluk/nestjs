import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  type Relation,
} from 'typeorm';
import { ReviewEntity } from '../../review/entities/review.entity.js';
import { BankEntity } from '../../bank/entities/bank.entity.js';
import { PassportUserEntity } from './passport.entity.js';
import { IsString, IsUUID } from 'class-validator';

enum COUNTRY {
  UKR = 'ukr',
  USA = 'usa',
  GER = 'ger',
  UK = 'uk',
}

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name', nullable: true })
  lastName: string;

  @Column({ type: 'date', unsigned: true })
  birthday: string;

  @Column({ name: 'is_married', type: 'boolean', default: false })
  isMarried: boolean;

  @Column({
    type: 'decimal',
    precision: 3, // кількість цифр
    scale: 1, // кількість цифр після коми
    default: 0.0,
  })
  rating: number;

  @Column({ type: 'enum', enum: COUNTRY, default: COUNTRY.UKR })
  country: COUNTRY;

  @OneToMany(() => ReviewEntity, (review) => review.user)
  reviews: Relation<ReviewEntity[]>;

  @ManyToMany(() => BankEntity, (bank) => bank.users)
  @JoinTable({
    name: 'user_banks',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'bank_id',
      referencedColumnName: 'id',
    },
  })
  banks: Relation<BankEntity[]>;

  @Column({ name: 'passport_id', type: 'uuid', nullable: true })
  passportId: string;

  @OneToOne(() => PassportUserEntity, (passport) => passport.user, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'passport_id' })
  passport: Relation<PassportUserEntity> | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
