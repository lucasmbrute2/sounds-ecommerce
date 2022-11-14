import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderDetails } from "./OrderDetails";

@Entity()
export class OrderItems {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'int'
    })
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @ManyToOne(()=> OrderDetails, order => order.orderItems)
    @JoinColumn({
        name: 'order_id'
    })
    order: OrderDetails
}