const knexconection = require('../getConection')()

async function save(category) {
    return knexconection('tb_category').insert({
        name: category.name,
       
    })
}

async function remove(category) {
    return knexconection('tb_category')
        .where('id', category.id)
        .del()
}

async function modify(category) {
    return knexconection('tb_category')
        .where('id', category.id)
        .update({
            name: category.name,
            
        })
}

async function view(category) {
    if (category.name_like) {
        return knexconection('tb_category')
            .select('*')
            .where('name', 'like', `%${category.name_like}%`)
    } else {
        return knexconection('tb_category')
            .select('*')
    }

}

async function viewF(category) {
    return knexconection('tb_category')
        .select('*')
}

async function viewID(category) {
    return knexconection('tb_category')
        .select('*')
        .where('id', category.id)
        .table('tb_category')
        .first();
}

module.exports = {
    save, remove, modify, view, viewID
}
