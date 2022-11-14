import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderDetails } from "./OrderDetails";

@Entity()
export class PaymentDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'int'
    })
    amount: number;

    @Column({
        type: 'varchar'
    })
    provider: string;

    @Column({
        type: 'varchar'
    })
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date

    @OneToOne(()=> OrderDetails)
    @JoinColumn({
        name: 'order_id'
    })
    order: OrderDetails
}