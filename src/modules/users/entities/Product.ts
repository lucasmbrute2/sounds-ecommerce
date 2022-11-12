import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
} 