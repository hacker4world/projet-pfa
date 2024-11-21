import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Account } from "./Account.entity";

@Entity()
export class Subscription extends BaseEntity {
  @PrimaryColumn()
  reference!: string;

  @Column()
  fullName!: string;

  @Column()
  address!: string;

  @ManyToOne(() => Account, (account) => account.cin)
  @JoinColumn({ name: "cin" })
  account!: Account;

  @Column()
  cin!: string;
}
