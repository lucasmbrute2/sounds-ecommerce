import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668235314977 implements MigrationInterface {
    name = 'default1668235314977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "payment_type" character varying NOT NULL, "provider" character varying NOT NULL, "account_no" integer NOT NULL, "expiry" date NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "PK_57db108902981ff1f5fcc2f2336" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_6efb9a2e661adeeb884020052ba" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`DROP TABLE "user_payment"`);
    }

}
