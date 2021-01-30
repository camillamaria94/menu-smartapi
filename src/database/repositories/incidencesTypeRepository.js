const knexconection = require('../getConection')()
async function save(incidencesType) {
    return knexconection('tb_incidencesType').insert({
        idType: incidencesType.idType,
        composed: incidencesType.composed,
        max: incidencesType.max,
        min: incidencesType.min
       
    })
}
async function remove(incidencesType) {
    return knexconection('tb_incidencesType')
        .where('id', incidencesType.id)
        .del()
}

async function modify(incidencesType) {
    return knexconection('tb_incidencesType')
        .where('id', incidencesType.id)
        .update({
            idType: incidencesType.idType,
            composed: incidencesType.composed,
            max: incidencesType.max,
            min: incidencesType.min
            
        })
}

async function view(incidences) {
    if (incidences.name_like) {
        return knexconection('tb_incidencesType')
            .select('*')
            .where('name', 'like', `%${incidences.name_like}%`)
    } else {
        return knexconection('tb_incidencesType')
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
