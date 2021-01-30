
exports.up = function(knex) {
    return knex.schema.createTable('tb_typeRecipe',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();
               
        table
        .string('name')
        .notNullable()
        .unique();

        table
        .integer('idTypeValue')
        .notNullable()

        table.foreign('idTypeValue').references('id').inTable('tb_typeValue');
    })
  
};

exports.down = function(knex) {
  
};
