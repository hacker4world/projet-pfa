import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./Account.entity";

@Entity()
export class Unpaidbills extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  reference!: string;

  @Column()
  client!: string;

  @Column()
  periode!: string;

  @Column()
  deadline!: Date;

  @Column()
  price!: string;

  @Column()
  contract!: string;

  @ManyToOne(() => Account, (account) => account.cin)
  @JoinColumn({ name: "cin" })
  account!: Account;

  @Column()
  cin!: string;
}
