import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668457715670 implements MigrationInterface {
    name = 'default1668457715670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order_items" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "order_id" uuid, "product_id" uuid, CONSTRAINT "REL_9263386c35b6b242540f9493b0" UNIQUE ("product_id"), CONSTRAINT "PK_005269d8574e6fac0493715c308" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" integer NOT NULL, "provider" character varying NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "order_id" uuid, CONSTRAINT "REL_5fb61b9bf1058e6494751fb151" UNIQUE ("order_id"), CONSTRAINT "PK_309f873cfbc20f57796956a1d33" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, "payment_id" uuid, CONSTRAINT "REL_0c0e9d2c4c3091276a7a4446e3" UNIQUE ("user_id"), CONSTRAINT "REL_f703ecfbf41e387f5b028f16f6" UNIQUE ("payment_id"), CONSTRAINT "PK_278a6e0f21c9db1653e6f406801" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_145532db85752b29c57d2b7b1f1" FOREIGN KEY ("order_id") REFERENCES "order_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_9263386c35b6b242540f9493b00" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_details" ADD CONSTRAINT "FK_5fb61b9bf1058e6494751fb1511" FOREIGN KEY ("order_id") REFERENCES "order_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD CONSTRAINT "FK_0c0e9d2c4c3091276a7a4446e32" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_details" ADD CONSTRAINT "FK_f703ecfbf41e387f5b028f16f63" FOREIGN KEY ("payment_id") REFERENCES "payment_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_details" DROP CONSTRAINT "FK_f703ecfbf41e387f5b028f16f63"`);
        await queryRunner.query(`ALTER TABLE "order_details" DROP CONSTRAINT "FK_0c0e9d2c4c3091276a7a4446e32"`);
        await queryRunner.query(`ALTER TABLE "payment_details" DROP CONSTRAINT "FK_5fb61b9bf1058e6494751fb1511"`);
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_9263386c35b6b242540f9493b00"`);
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_145532db85752b29c57d2b7b1f1"`);
        await queryRunner.query(`DROP TABLE "order_details"`);
        await queryRunner.query(`DROP TABLE "payment_details"`);
        await queryRunner.query(`DROP TABLE "order_items"`);
    }

}
