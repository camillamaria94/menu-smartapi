exports.up = async function(knex) {
    return knex.schema.createTable('tb_equipment',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();
               
        table
        .string('name')
        .notNullable()
        .unique();
    })
};

exports.down = async function(knex) {
  
};