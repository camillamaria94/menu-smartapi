const knexconection = require('../getConection')()
async function save(ingredients) {
    return knexconection('tb_ingredients').insert({
        name: ingredients.name,
        calories: ingredients.calories
       
    })
}
async function remove(ingredients) {
    return knexconection('tb_ingredients')
        .where('id', ingredients.id)
        .del()
}

async function modify(ingredients) {
    return knexconection('tb_ingredients')
        .where('id', ingredients.id)
        .update({
            name: ingredients.name,
            calories: ingredients.calories
            
        })
}

async function view(ingredients) {
    if (ingredients.name_like) {
        return knexconection('tb_ingredients')
            .select('*')
            .where('name', 'like', `%${ingredients.name_like}%`)
    } else {
        return knexconection('tb_ingredients')
            .select('*')
    }

}

async function viewID(ingredients) {
    return knexconection('tb_ingredients')
        .select('*')
        .where('id', ingredients.id)
        .table('tb_ingredients')
        .first();
}

module.exports = {
    save, remove, modify, view, viewID
}