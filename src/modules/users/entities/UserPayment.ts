import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class UserPayment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar'
    })
    payment_type: string;

    @Column({
        type: 'varchar'
    })
    provider: string;

    @Column({
        type: 'int'
    })
    account_no: number;

    @CreateDateColumn({
        type: 'date'
    })
    expiry: Date

    @ManyToOne(()=> User, (user)=> user.payments)
    @JoinColumn({ name: 'user_id' })
    user: User
}