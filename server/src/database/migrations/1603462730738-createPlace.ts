import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPlace1603462730738 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "places",
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
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "about",
                        type: "text",
                    },
                    {
                        name: "latitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2,
                    },
                    {
                        name: "longitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2,
                    },
                    {
                        name: "instructions",
                        type: "text",
                    },
                    {
                        name: "working_hours",
                        type: "varchar",
                    },
                    {
                        name: "working_weekends",
                        type: "boolean",
                        default: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("places");
    }
}
