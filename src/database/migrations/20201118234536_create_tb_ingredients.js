exports.up = async function(knex) {
    return knex.schema.createTable('tb_ingredients',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();
               
        table
        .string('name')
        .notNullable()
        .unique();

        table
        .float('calories')

    })
};

exports.down = async function(knex) {
  
};
