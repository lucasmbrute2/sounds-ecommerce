import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserAddress } from "./UserAddress";
import { UserPayment } from "./UserPayment";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({
    type: 'varchar'
  })
  username: string;

  @Column({
    type: 'varchar'
  })
  password: string;

  @Column({
    type: 'varchar'
  })
  first_name: string;

  @Column({
    type: 'varchar'
  })
  last_name: string;

  @Column({
    type: 'varchar'
  })
  phone: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  modified_at: string;

  @OneToMany(()=> UserAddress, (userAddress) => userAddress.user)
  adresses: UserAddress[]

  @OneToMany(()=> UserPayment, (userPayment) => userPayment.user) 
  payments: UserPayment[]

  @DeleteDateColumn()
  deletedAt?: Date;

}