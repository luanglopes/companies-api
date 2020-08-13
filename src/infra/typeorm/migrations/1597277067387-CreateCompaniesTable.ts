import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCompaniesTable1597277067387 implements MigrationInterface {
  private tableName = 'companies'

  public async up (queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(new Table({
      name: this.tableName,
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'fancy_name',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'cnpj',
          type: 'varchar',
        },
        {
          name: 'opening_date',
          type: 'date',
        },
      ],
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable(this.tableName)
  }
}
