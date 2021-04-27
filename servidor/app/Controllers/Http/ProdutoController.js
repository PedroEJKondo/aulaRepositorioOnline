'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Produto = use('App/Models/Produto')
    /**
     * Resourceful controller for interacting with produtos
     */
class ProdutoController {
    /**
     * Show a list of all produtos.
     * GET produtos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ response }) {
        const prods = await Produto.all();
        if (!prods) {
            return response.json({ data: null, msg: 'Nenhuma informação encontrada..' });
        }
        return response.json({ data: prods });
    }

    /**
     * Create/save a new produto.
     * POST produtos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const input = request.all();
        const prod = await Produto.create(input);
        return response.json({ data: prod });
    }

    /**
     * Display a single produto.
     * GET produtos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, response }) {
        const prod = await Produto.find(params.id);
        if (!prod) {
            return response.json({ data: null, msg: 'Nenhuma informação encontrada..' });
        }
        return response.json({ data: prod });
    }

    /**
     * Update produto details.
     * PUT or PATCH produtos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const input = request.all();
        const prod = await Produto.find(params.id);
        if (!prod) {
            return response.json({ data: null, msg: 'Nenhuma informação encontrada..' });
        }

		prod.merge(input);
        // prod.nome = input.nome;
        // prod.preco = input.preco;
        // prod.qtd = input.qtd;
        await prod.save();
        return response.json({ data: prod });
    }

    /**
     * Delete a produto with id.
     * DELETE produtos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, response }) {
        const prod = await Produto.find(params.id);
        if (!prod) {
            return response.json({ data: null, msg: 'Nenhuma informação encontrada..' });
        }
        prod.delete();
        return response.json({ data: prod });
    }
}

module.exports = ProdutoController