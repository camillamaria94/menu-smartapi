const knexconection = require('../getConection')()

async function save(menu) {
    return knexconection('tb_menu').insert({
        name: menu.name,
        date: `01/${menu.mouth}/${menu.year}`,
        verifyIncidences: menu.verifyIncidences,
        publish: menu.publish          
    })
}
async function remove(menu) {
    return knexconection('tb_menu')
        .where('id', menu.id)
        .del()
}

async function modify(menu) {
    return knexconection('tb_menu')
        .where('id', menu.id)
        .update({
            name: menu.name,
            date: menu.date,
            verifyIncidences: menu.verifyIncidences,
            publish: menu.publish   
            
        })
}
async function viewPublish(menu) {
    return knexconection('tb_menu')
        .select('*')
        .where('publish', menu.publish)
        .table('tb_menu')

}

async function view(menu) {
    if (menu.name_like) {
        return knexconection('tb_menu')
            .select('*')
            .where('name', 'like', `%${menu.name_like}%`)
    } else {
        return knexconection('tb_menu')
            .select('*')
    }

}

async function viewID(menu) {
    return knexconection('tb_menu')
        .select('*')
        .where('id', menu.id)
        .table('tb_menu')
        .first();
}






module.exports = {
    save, remove, modify, view, viewID,viewPublish
}
