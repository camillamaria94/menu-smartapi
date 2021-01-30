const knexconection = require('../getConection')()
async function save(texture) {
    return knexconection('tb_texture').insert({
        name: texture.name,
       
    })
}
async function remove(texture) {
    return knexconection('tb_texture')
        .where('id', texture.id)
        .del()
}

async function modify(texture) {
    return knexconection('tb_texture')
        .where('id', texture.id)
        .update({
            name: texture.name,
            
        })
}

async function view(texture) {
    if (texture.name_like) {
        return knexconection('tb_texture')
            .select('*')
            .where('name', 'like', `%${texture.name_like}%`)
    } else {
        return knexconection('tb_texture')
            .select('*')
    }

}

async function viewID(texture) {
    return knexconection('tb_texture')
        .select('*')
        .where('id', texture.id)
        .table('tb_texture')
        .first();
}

module.exports = {
    save, remove, modify, view, viewID
}