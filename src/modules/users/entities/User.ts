import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({
    type: 'varchar'
  })
  username!: string;

  @Column({
    type: 'varchar'
  })
  password!: string;

  @Column({
    type: 'varchar'
  })
  first_name!: string;

  @Column({
    type: 'varchar'
  })
  last_name!: string;

  @Column({
    type: 'varchar'
  })
  phone!: string;

  @CreateDateColumn()
  created_at!: string;

  @CreateDateColumn()
  modified_at!: string;
}