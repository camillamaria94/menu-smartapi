const knexconection = require('../getConection')()
async function save(recipeEquipment) {
    return knexconection('tb_recipeEquipment').insert({
        idRecipe: recipeEquipment.idRecipe,
        idEquipment: recipeEquipment.idEquipment, 
        primary: recipeEquipment.primary
       
    })
}
async function remove(recipeEquipment) {
    return knexconection('tb_recipeEquipment')
        .where('id', recipeEquipment.id)
        .del()
}

async function modify(recipeEquipment) {
    return knexconection('tb_recipeEquipment')
        .where('id', recipeEquipment.id)
        .update({
            idRecipe: recipeEquipment.idRecipe,
            idEquipment: recipeEquipment.idEquipment, 
            primary: recipeEquipment.primary
            
        })
}

async function view(recipeEquipment) {
    if (recipeEquipment.name_like) {
        return knexconection('tb_recipeEquipment')
            .select('*')
            .where('name', 'like', `%${recipeEquipment.name_like}%`)
    } else {
        return knexconection('tb_recipeEquipment')
            .select('*')
    }

}

async function viewID(recipeEquipment) {
    return knexconection('tb_recipeEquipment')
        .select('*')
        .where('id', recipeEquipment.id)
        .table('tb_recipeEquipment')
        .first();
}

async function viewIDRecipe(recipeEquipment) {
    return knexconection('tb_recipeEquipment')
        .select('*')
        .where('idRecipe', recipeEquipment.idRecipe)
        .table('tb_recipeEquipment')
     
}

module.exports = {
    save, remove, modify, view, viewID,viewIDRecipe
}
