import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Discount {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar'
    })
    name: string;

    @Column({
        type: 'character'
    })
    description: string;

    @Column({
        type: 'numeric'
    })
    discount_percent: number;

    @Column({
        type: 'boolean'
    })
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @OneToMany(()=> Product, product => product.discount)
    product: Product[]
}