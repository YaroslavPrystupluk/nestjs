import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

enum COUNTRY {
  UKR = 'ukr',
  USA = 'usa',
  GER = 'ger',
  UK = 'uk',
}

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn()
  @Generated('uuid')
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

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
