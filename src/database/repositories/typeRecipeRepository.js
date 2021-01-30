const knexconection = require('../getConection')()

async function save(typeRecipe) {
    return knexconection('tb_typeRecipe').insert({
        name: typeRecipe.name,
        idTypeValue: typeRecipe.idTypeValue

    })
}

async function remove(typeRecipe) {
    return knexconection('tb_typeRecipe')
        .where('id', typeRecipe.id)
        .del()
}

async function modify(typeRecipe) {
    return knexconection('tb_typeRecipe')
        .where('id', typeRecipe.id)
        .update({
            name: typeRecipe.name,
            idTypeValue: typeRecipe.idTypeValue

        })
}

async function view(typeRecipe) {
    if (typeRecipe.name_like) {
        return knexconection('tb_typeRecipe')
            .select('*')
            .where('name', 'like', `%${typeRecipe.name_like}%`)
    } else {
        return knexconection('tb_typeRecipe')
            .select('*')
    }

}

async function viewID(typeRecipe) {
    return knexconection('tb_typeRecipe')
        .select('*')
        .where('id', typeRecipe.id)
        .table('tb_typeRecipe')
        .first();
}



module.exports = {
    save, remove, modify, view, viewID
}