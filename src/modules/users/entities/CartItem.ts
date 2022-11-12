import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingSession } from "./ShoppingSession";

@Entity()
export class CartItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=> ShoppingSession, (shpSession)=> shpSession.cartItems)
    @JoinColumn({
        name: 'session_id'
    })
    session: ShoppingSession[]

    @Column({
        type: 'int'
    })
    quantity: number;

    @CreateDateColumn()
    created_at: Date;
  
    @CreateDateColumn()
    modified_at: Date;
}