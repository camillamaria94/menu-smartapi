const knexconection = require('../getConection')()

async function save(type) {
    return knexconection('tb_typeValue').insert({
        name: type.name,
       
    })
}

async function remove(type) {
    return knexconection('tb_typeValue')
        .where('id', type.id)
        .del()
}

async function modify(type) {
    return knexconection('tb_typeValue')
        .where('id', type.id)
        .update({
            name: type.name,
            
        })
}

async function view(type) {
    if (type.name_like) {
        return knexconection('tb_typeValue')
            .select('*')
            .where('name', 'like', `%${type.name_like}%`)
    } else {
        return knexconection('tb_typeValue')
            .select('*')
    }

}

async function viewID(type) {
    return knexconection('tb_typeValue')
        .select('*')
        .where('id', type.id)
        .table('tb_typeValue')
        .first();
}

module.exports = {
    save, remove, modify, view, viewID
}
