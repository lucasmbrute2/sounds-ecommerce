import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class UserAddres {
    @PrimaryGeneratedColumn()
    id!: string;
   
    @ManyToOne(()=> User, (user)=> user.adresses) 
    user!: User

    @Column()
    address_line1!: string
    
    @Column()
    address_line2!: string;
    
    @Column()
    city!: string;
    
    @Column()
    postal_code!: string;
    
    @Column()
    country!: string;
    
    @Column()
    phone!: string;
    
    @Column()
    mobile!: string;
}