
exports.up = function(knex) {
    return knex.schema.createTable('tb_menu',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();
               
        table
        .string('name')
        .notNullable()
        .unique();

        table
        .date('date')
        .notNullable()

        table
        .boolean('verifyIncidences')
        .notNullable()

        table
        .boolean('publish')
        .notNullable()

    })
  
};

exports.down = function(knex) {
  
};
