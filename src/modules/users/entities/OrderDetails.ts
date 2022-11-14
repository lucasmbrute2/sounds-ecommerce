import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderItems } from "./OrderItems";
import { PaymentDetails } from "./PaymentDetailts";
import { User } from "./User";

@Entity()
export class OrderDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'numeric'
    })
    total: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @OneToOne(()=> User)
    @JoinColumn({
        name: 'user_id'
    })
    user: User

    @OneToMany(()=> OrderItems, orderItem => orderItem.order)
    orderItems: OrderItems[]

    @OneToOne(()=> PaymentDetails)
    @JoinColumn({
        name: 'payment_id'
    })
    payment: PaymentDetails
}