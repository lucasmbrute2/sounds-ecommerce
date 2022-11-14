import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProductCategory {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: 'varchar'
    })
    name: string;

    @Column({
        type: 'character'
    })
    description: string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    modified_at: Date;

    @DeleteDateColumn({
        nullable: true
    })
    deleted_at: Date

    @OneToMany(()=> Product, (product) => product.category )
    product: Product[]
}