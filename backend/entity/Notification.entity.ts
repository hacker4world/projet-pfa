import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./Account.entity";

@Entity()
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  date!: Date;

  @Column()
  message!: string;

  @ManyToOne(() => Account, (account) => account.cin)
  @JoinColumn({ name: "cin" })
  account!: Account;

  @Column()
  cin!: string;

  @Column()
  reference!: string;
}
