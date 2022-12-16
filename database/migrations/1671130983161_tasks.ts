import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('description')
      table.timestamp('performed_on', {useTz: true}).notNullable()
      table.integer('minutes').notNullable()

      // relationships
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('family_id').unsigned().references('families.id')
      //table.integer('task_type').unsigned().references('task_types.id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
