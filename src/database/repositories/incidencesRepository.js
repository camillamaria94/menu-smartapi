const knexconection = require('../getConection')()


async function save(incidences) {
    return knexconection('tb_incidences').insert({
        idIngredients: incidences.idIngredients,
        min: incidences.min,
        max: incidences.max
       
    })
}
async function remove(incidences) {
    return knexconection('tb_incidences')
        .where('id', incidences.id)
        .del()
}

async function modify(incidences) {
    return knexconection('tb_incidences')
        .where('id', incidences.id)
        .update({
            idIngredients: incidences.idIngredients,
            min: incidences.min,
            max: incidences.max
        })
}

async function view(incidences) {
    if (incidences.name_like) {
        return knexconection('tb_incidences')
            .select('*')
            .where('name', 'like', `%${incidences.name_like}%`)
    } else {
        return knexconection('tb_incidences')
            .select('*')
    }

}

async function viewID(incidences) {
    return knexconection('tb_incidences')
        .select('*')
        .where('id', incidences.id)
        .table('tb_incidences')
        .first();
}

module.exports = {
    save, remove, modify, view, viewID
}
