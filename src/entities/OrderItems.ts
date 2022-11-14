import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderDetails } from "./OrderDetails";
import { Product } from "./Product";

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

    @OneToOne(()=> Product)
    @JoinColumn({
        name: 'product_id'
    })
    product: Product
}