const knexconection = require('../getConection')()
async function save(color) {
    return knexconection('tb_color').insert({
        name: color.name,
       
    })
}
async function remove(color) {
    return knexconection('tb_color')
        .where('id', color.id)
        .del()
}

async function modify(color) {
    return knexconection('tb_color')
        .where('id', color.id)
        .update({
            name: color.name,
            
        })
}

async function view(color) {
    if (color.name_like) {
        return knexconection('tb_color')
            .select('*')
            .where('name', 'like', `%${color.name_like}%`)
    } else {
        return knexconection('tb_color')
            .select('*')
    }

}

async function viewID(color) {
    return knexconection('tb_color')
        .select('*')
        .where('id', color.id)
        .table('tb_color')
        .first();
}

module.exports = {
    save, remove, modify, view, viewID
}
