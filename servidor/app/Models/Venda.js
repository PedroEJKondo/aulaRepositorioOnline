'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Venda extends Model {

    idProduto() {
        return this.hasOne('App/Models/Produto')
    }
}

module.exports = Venda