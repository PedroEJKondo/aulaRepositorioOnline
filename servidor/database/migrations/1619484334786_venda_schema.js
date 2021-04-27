'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VendaSchema extends Schema {
    up() {
        this.create('vendas', (table) => {
            table.increments()
            table.string('cliente')
            table.integer('qtd')
            table.integer('produto_id').unsigned();
            table.foreign('produto_id').references('id').inTable('produtos');
            table.timestamps()
        })
    }

    down() {
        this.drop('vendas')
    }
}

module.exports = VendaSchema