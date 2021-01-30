const knexconection = require('../getConection')()
async function save(recipe) {
    return knexconection('tb_recipe').insert({
        name: recipe.name, 
        methodPreparation: recipe.methodPreparation, 
        composed: recipe.composed,
        lactose: recipe.lactose, 
        gluten: recipe.gluten, 
        calories: recipe.calories,
        codTypeRecipe: recipe.codTypeRecipe,
        codCategory: recipe.codCategory,
        codTexture: recipe.codTexture,
        codColor: recipe.codColor,
        codFlavor: recipe.codFlavor
        
    })
}
async function remove(recipe) {
    return knexconection('tb_recipe')
        .where('id', recipe.id)
        .del()
}

async function modify(recipe) {
    return knexconection('tb_recipe')
        .where('id', recipe.id)
        .update({
            name: recipe.name, 
            methodPreparation: recipe.methodPreparation, 
            composed: recipe.composed,
            lactose: recipe.lactose, 
            gluten: recipe.gluten, 
            calories: recipe.calories,
            codTypeRecipe: recipe.codTypeRecipe,
            codCategory: recipe.codCategory,
            codTexture: recipe.codTexture,
            codColor: recipe.codColor,
            codFlavor: recipe.codFlavor
        })
}

async function view(recipe) {
    if (recipe.name_like) {
        return knexconection('tb_recipe')
            .select('*')
            .where('name', 'like', `%${recipe.name_like}%`)
    } else {
        return knexconection('tb_recipe')
            .select('*')
    }

}

async function viewID(recipe) {
    return knexconection('tb_recipe')
        .select('*')
        .where('id', recipe.id)
        .table('tb_recipe')
        .first();
}

module.exports = {
    save, remove, modify, view, viewID
}
