import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1603849967547 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "images",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "path",
                        type: "varchar",
                    },
                    {
                        name: "place_id",
                        type: "integer",
                    },
                ],
                foreignKeys: [
                    {
                        name: "ImagePlace",
                        columnNames: ["place_id"],
                        referencedTableName: "places",
                        referencedColumnNames: ["id"],
                        onUpdate: "cascade",
                        onDelete: "cascade",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images");
    }
}
