

exports.up = async function(knex) {
    return knex.schema.createTable('tb_users',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();
               
        table
        .string('name')
        .notNullable()
        .unique();

        table
        .string('email')
        .notNullable()
        .unique();

        table
        .string('password')
        .notNullable()

        table
        .string('confirmPassword')
        .notNullable()

        table
        .string('telephone')
        .notNullable()

        table
        .string('type')
        .notNullable()

        table
        .date('date')
        .notNullable()
        
        table
        .boolean('firstLogin')
        .notNullable()
    })
    
};

exports.down = async function(knex) {
   
}
