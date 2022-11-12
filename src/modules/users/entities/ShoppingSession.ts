import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartItem } from "./CartItem";
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

    @OneToMany(()=> CartItem, (cartItem)=> cartItem.session) 
    cartItems: CartItem[]
}