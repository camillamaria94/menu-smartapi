
exports.up = function(knex) {

    return knex.schema.createTable('tb_incidences',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();

        table
        .integer('idIngredients')
        .notNullable()

        table
        .integer('min')
        .notNullable()

        table
        .integer('max')
        .notNullable()

        table.foreign('idIngredients').references('id').inTable('tb_ingredients');

    })
  
};

exports.down = function(knex) {
  
};
