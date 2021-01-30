const knexconection = require('../getConection')()
async function save(dayMenu) {
    return knexconection('tb_dayMenu').insert({
        day: dayMenu.day,
        idRecipe: dayMenu.idRecipe, 
        idTypeRecipe: dayMenu.idTypeRecipe,
        idMenu: dayMenu.idMenu
       
    })
}
async function remove(dayMenu) {
    return knexconection('tb_dayMenu')
        .where('id', dayMenu.id)
        .del()
}

async function modify(dayMenu) {
    return knexconection('tb_dayMenu')
        .where('id', dayMenu.id)
        .update({
            day: dayMenu.day,
            idRecipe: dayMenu.idRecipe, 
            idTypeRecipe: dayMenu.idTypeRecipe,
            idMenu: dayMenu.idMenu
            
        })
}

async function view(dayMenu) {
    if (dayMenu.name_like) {
        return knexconection('tb_dayMenu')
            .select('*')
            .where('name', 'like', `%${dayMenu.name_like}%`)
    } else {
        return knexconection('tb_dayMenu')
            .select('*')
    }

}
async function viewMenu(dayMenu) {
    return knexconection('tb_dayMenu')
        .select('*')
        .where('idMenu', dayMenu.idMenu)
        .table('tb_dayMenu')
}

async function viewID(dayMenu) {
    return knexconection('tb_dayMenu')
        .select('*')
        .where('id', dayMenu.id)
        .table('tb_dayMenu')
        .first();
}

async function viewDay(dayMenu) {
    return knexconection('tb_dayMenu')
        .select('*')
        .where('day', dayMenu.day)
        .table('tb_dayMenu')
}





module.exports = {
    save, remove, modify, view, viewID, viewDay, viewMenu
}
