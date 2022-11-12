import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class ShoppingSession {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(()=> User)
    @JoinColumn({
        name: 'user_id'
    })
    user: User

    @Column({
        type: 'numeric'
    })
    total: number

    @CreateDateColumn()
    created_at: Date;
  
    @CreateDateColumn()
    modified_at: Date;
}