import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class UserAddress {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
   
    @ManyToOne(()=> User, (user)=> user.adresses) 
    user: User

    @Column({
        type: 'varchar'
    })
    address_line1: string
    
    @Column({
        type: 'varchar'
    })
    address_line2: string;
    
    @Column({
        type: 'varchar'
    })
    city: string;

    @Column({
        type: 'varchar'
    })
    postal_code: string;

    @Column({
        type: 'varchar'
    })
    country: string;
    
    @Column({
        type: 'varchar'
    })
    phone: string;
    
    @Column({
        type: 'varchar'
    })
    mobile: string;
}