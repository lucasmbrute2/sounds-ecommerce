import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  phone!: string;

  @CreateDateColumn()
  created_at!: string;

  @CreateDateColumn()
  modified_at!: string;

}