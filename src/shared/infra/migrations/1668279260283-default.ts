import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668279260283 implements MigrationInterface {
    name = 'default1668279260283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shopping_session" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "modified_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, CONSTRAINT "REL_dfc5348e0094aa88e3a38b276c" UNIQUE ("user_id"), CONSTRAINT "PK_6ed992315207dbf9c02cce3693c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shopping_session" ADD CONSTRAINT "FK_dfc5348e0094aa88e3a38b276c5" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shopping_session" DROP CONSTRAINT "FK_dfc5348e0094aa88e3a38b276c5"`);
        await queryRunner.query(`DROP TABLE "shopping_session"`);
    }

}
