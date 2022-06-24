import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations11656083220178 implements MigrationInterface {
    name = 'migrations11656083220178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "carsId" uuid NOT NULL DEFAULT uuid_generate_v4(), "photo" character varying NOT NULL, "model" character varying NOT NULL, "type" character varying NOT NULL, "color" character varying NOT NULL, "price" character varying NOT NULL, CONSTRAINT "PK_7eb95ca9c378abfa1123d14d800" PRIMARY KEY ("carsId"))`);
        await queryRunner.query(`CREATE TABLE "user_progipix" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "names" character varying NOT NULL, "lastnames" character varying NOT NULL, "phone" bigint NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "photos" character varying NOT NULL, "state" boolean, CONSTRAINT "UQ_e65cd4656152b7d5884174e4c8b" UNIQUE ("email"), CONSTRAINT "PK_2820cb10699b0c5523d36587bb3" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "Bidding" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "biddingId" uuid NOT NULL DEFAULT uuid_generate_v4(), "proposed_price" character varying NOT NULL, "cars_fk_id" uuid, "bidding_fk_id" uuid, CONSTRAINT "PK_d16fd3a4bccda5f438b9e625f7f" PRIMARY KEY ("biddingId"))`);
        await queryRunner.query(`ALTER TABLE "Bidding" ADD CONSTRAINT "FK_c5b088899dfe7723f4d2ca2db9e" FOREIGN KEY ("cars_fk_id") REFERENCES "cars"("carsId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Bidding" ADD CONSTRAINT "FK_c79287456f99023de0aae806915" FOREIGN KEY ("bidding_fk_id") REFERENCES "user_progipix"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Bidding" DROP CONSTRAINT "FK_c79287456f99023de0aae806915"`);
        await queryRunner.query(`ALTER TABLE "Bidding" DROP CONSTRAINT "FK_c5b088899dfe7723f4d2ca2db9e"`);
        await queryRunner.query(`DROP TABLE "Bidding"`);
        await queryRunner.query(`DROP TABLE "user_progipix"`);
        await queryRunner.query(`DROP TABLE "cars"`);
    }

}
