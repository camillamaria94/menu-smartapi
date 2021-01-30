
exports.up = function(knex) {

    return knex.schema.createTable('tb_incidencesType',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();

        table
        .integer('idType')
        .notNullable()

        table
        .boolean('composed')
        .notNullable()

        table
        .integer('min')
        .notNullable()

        table
        .integer('max')
        .notNullable()

        table.foreign('idType').references('id').inTable('tb_typeValue');

    })
  
};

exports.down = function(knex) {
  
};
