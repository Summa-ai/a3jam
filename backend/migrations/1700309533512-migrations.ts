import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1700309533512 implements MigrationInterface {
    name = 'Migrations1700309533512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dictionary" ("id" SERIAL NOT NULL, "word" text NOT NULL, "dictionary" json, CONSTRAINT "PK_d17df343bd5d01ed62dd0e55e4a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dictionary"`);
    }

}
