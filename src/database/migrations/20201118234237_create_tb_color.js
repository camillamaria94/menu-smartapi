exports.up = function(knex) {
    return knex.schema.createTable('tb_color',(table) => {
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

exports.down = function(knex) {
  
};