const knexconection = require('../getConection')()
async function save(recipeIngredients) {
    return knexconection('tb_recipeIngredients').insert({
        idRecipe: recipeIngredients.idRecipe,
        idIngredient: recipeIngredients.idIngredient, 
        primary: recipeIngredients.primary
       
    })
}
async function remove(recipeIngredients) {
    return knexconection('tb_recipeIngredients')
        .where('id', recipeIngredients.id)
        .del()
}

async function modify(recipeIngredients) {
    return knexconection('tb_recipeIngredients')
        .where('id', recipeIngredients.id)
        .update({
            idRecipe: recipeIngredients.idRecipe,
            idIngredient: recipeIngredients.idIngredient, 
            primary: recipeIngredients.primary
            
        })
}

async function view(recipeIngredients) {
    if (recipeIngredients.name_like) {
        return knexconection('tb_recipeIngredients')
            .select('*')
            .where('name', 'like', `%${recipeIngredients.name_like}%`)
    } else {
        return knexconection('tb_recipeIngredients')
            .select('*')
    }

}

async function viewID(recipeIngredients) {
    return knexconection('tb_recipeIngredients')
        .select('*')
        .where('id', recipeIngredients.id)
        .table('tb_recipeIngredients')
        .first();
}

async function viewIDRecipe(recipeIngredients) {
    return knexconection('tb_recipeIngredients')
        .select('*')
        .where('idRecipe', recipeIngredients.idRecipe)
        .table('tb_recipeIngredients')
     
}

module.exports = {
    save, remove, modify, view, viewID, viewIDRecipe
}
