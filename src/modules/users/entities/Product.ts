import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductCategory } from "./ProductCategory";
import { ProductInventory } from "./ProductInventory";

@Entity()
export class Product {
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
        type: 'varchar'
    })
    SKU: string;

    @Column({
        type: 'numeric'
    })
    price: number;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    modified_at: Date;

    @DeleteDateColumn({
        nullable: true
    })
    deleted_at: Date

    @ManyToOne(()=> ProductCategory, (productCategory) => productCategory.product)
    @JoinColumn({
        name: 'category_id'
    })
    category: ProductCategory

    @OneToOne(()=> ProductInventory)
    @JoinColumn({
        name: 'inventory_id'
    })
    invenotory: ProductInventory
} 