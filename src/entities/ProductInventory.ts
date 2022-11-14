import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductInventory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'numeric'
    })
    quantity: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @DeleteDateColumn()
    deleta_at: Date;
}