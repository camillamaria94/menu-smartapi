const knexconection = require('../getConection')()
async function save(equipment) {
    return knexconection('tb_equipment').insert({
        name: equipment.name,
       
    })
}
async function remove(equipment) {
    return knexconection('tb_equipment')
        .where('id', equipment.id)
        .del()
}

async function modify(equipment) {
    return knexconection('tb_equipment')
        .where('id', equipment.id)
        .update({
            name: equipment.name,
            
        })
}

async function view(equipment) {
    if (equipment.name_like) {
        return knexconection('tb_equipment')
            .select('*')
            .where('name', 'like', `%${equipment.name_like}%`)
    } else {
        return knexconection('tb_equipment')
            .select('*')
    }

}

async function viewID(equipment) {
    return knexconection('tb_equipment')
        .select('*')
        .where('id', equipment.id)
        .table('tb_equipment')
        .first();
}

module.exports = {
    save, remove, modify, view, viewID
}