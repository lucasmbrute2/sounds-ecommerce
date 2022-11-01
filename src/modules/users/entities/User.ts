import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserAddress } from "./UserAddress";

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

  @CreateDateColumn()
  modified_at: string;

  @OneToMany(()=> UserAddress, (userAddress)=> userAddress.user)
  adresses: UserAddress[]

}