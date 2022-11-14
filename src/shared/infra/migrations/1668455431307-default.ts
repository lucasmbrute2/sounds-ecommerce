import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668455431307 implements MigrationInterface {
    name = 'default1668455431307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "discount" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character NOT NULL, "discount_percent" numeric NOT NULL, "active" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d05d8712e429673e459e7f1cddb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_inventory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "deleta_at" TIMESTAMP, CONSTRAINT "PK_84e9362e0a5bf063e561d9452ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "category_id" uuid`);
        await queryRunner.query(`ALTER TABLE "product" ADD "inventory_id" uuid`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_84e9362e0a5bf063e561d9452ba" UNIQUE ("inventory_id")`);
        await queryRunner.query(`ALTER TABLE "product" ADD "discount_id" uuid`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1" FOREIGN KEY ("category_id") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_84e9362e0a5bf063e561d9452ba" FOREIGN KEY ("inventory_id") REFERENCES "product_inventory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_8cfd00cd6b9904ee7c5a45ffb3f" FOREIGN KEY ("discount_id") REFERENCES "discount"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_8cfd00cd6b9904ee7c5a45ffb3f"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_84e9362e0a5bf063e561d9452ba"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "discount_id"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_84e9362e0a5bf063e561d9452ba"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "inventory_id"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category_id"`);
        await queryRunner.query(`DROP TABLE "product_inventory"`);
        await queryRunner.query(`DROP TABLE "product_category"`);
        await queryRunner.query(`DROP TABLE "discount"`);
    }

}
