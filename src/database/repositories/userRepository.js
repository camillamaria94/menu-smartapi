const knexconection = require('../getConection')()
async function save(user) {
    return knexconection('tb_users').insert({
        name: user.name,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        telephone: user.telephone,
        type: user.type,   
        date: user.date,
        firstLogin: user.firstLogin   
        
             
    })
}
async function remove(user) {
    return knexconection('tb_users')
        .where('id', user.id)
        .del()
}

async function modify(user) {
    return knexconection('tb_users')
        .where('id', user.id)
        .update({
            name: user.name,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword,
            telephone: user.telephone,
            type: user.type,   
            date: user.date,
            firstLogin: user.firstLogin       
            
        })
}

async function modifyPassword(user) {
    return knexconection('tb_users')
        .where('id', user.id)
        .update({
            password: user.password,
            confirmPassword: user.confirmPassword,
            firstLogin: user.firstLogin       
            
        })
}




async function view(user) {
    if (user.name_like) {
        return knexconection('tb_users')
            .select('*')
            .where('name', 'like', `%${user.name_like}%`)
    } else {
        return knexconection('tb_users')
            .select('*')
    }

}

async function viewEmail(user) {
    return knexconection('tb_users')
        .select('*')
        .where('email', user.email)
        .andWhere('password', user.password)
        .table('tb_users')
        .first();
}

async function viewID(user) {
    return knexconection('tb_users')
        .select('*')
        .where('id', user.id)
        .table('tb_users')
        .first();
}



async function viewFirst(user) {
    return knexconection('tb_users')
        .select('*')
        .where('email', user.email)
        .table('tb_users')
        .first();
}



module.exports = {
    save, remove, modify, view, viewID, viewEmail, viewFirst, modifyPassword
}
