const knexconection = require('../getConection')()
async function save(flavor) {
    return knexconection('tb_flavor').insert({
        name: flavor.name,
       
    })
}
async function remove(flavor) {
    return knexconection('tb_flavor')
        .where('id', flavor.id)
        .del()
}

async function modify(flavor) {
    return knexconection('tb_flavor')
        .where('id', flavor.id)
        .update({
            name: flavor.name,
            
        })
}

async function view(flavor) {
    if (flavor.name_like) {
        return knexconection('tb_flavor')
            .select('*')
            .where('name', 'like', `%${flavor.name_like}%`)
    } else {
        return knexconection('tb_flavor')
            .select('*')
    }

}

async function viewID(flavor) {
    return knexconection('tb_flavor')
        .select('*')
        .where('id', flavor.id)
        .table('tb_flavor')
        .first();
}

module.exports = {
    save, remove, modify, view, viewID
}