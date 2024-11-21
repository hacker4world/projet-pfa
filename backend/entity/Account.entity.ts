import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from "typeorm";

@Entity()
export class Account extends BaseEntity {
  @PrimaryColumn()
  cin!: string;
  @Column()
  name!: string;
  @Column()
  email!: string;
  @Column()
  password!: string;
  @Column({ length: 8, unique: true })
  phone!: string;
  @Column()
  adress!: string;
}
