import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers11669887656911 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar(60)',
                },
                {
                    name: 'email',
                    type: 'varchar(60)',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar(60)',
                },
                {
                    name: 'phone',
                    type: 'varchar(15)',
                    isUnique: true,
                },
                {
                    name: 'role',
                    type: 'varchar(15)',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
