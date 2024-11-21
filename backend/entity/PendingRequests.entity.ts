import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Account } from "./Account.entity";

@Entity()
export class PendingRequest extends BaseEntity {
  @PrimaryColumn()
  reference!: string;

  @Column()
  number!: string;

  @Column()
  contract!: string;

  @Column()
  complaint!: string;

  @Column()
  creationDate!: string;

  @Column()
  steps!: string;

  @Column()
  comment!: string;

  @ManyToOne(() => Account, (account) => account.cin)
  @JoinColumn({ name: "cin" })
  account!: Account;

  @Column()
  cin!: string;
}