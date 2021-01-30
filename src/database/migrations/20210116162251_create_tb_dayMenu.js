
exports.up = function(knex) {
    return knex.schema.createTable('tb_dayMenu',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();
        
        table
        .integer('day')
        .notNullable()

        table
        .integer('idRecipe')
        .notNullable()

        table
        .integer('idTypeRecipe')
        .notNullable()

        table
        .integer('idMenu')
        .notNullable()

        table.foreign('idRecipe').references('id').inTable('tb_recipe');
        table.foreign('idTypeRecipe').references('id').inTable('tb_typeRecipe');
        table.foreign('idMenu').references('id').inTable('tb_menu');
    })
  
};

exports.down = function(knex) {
  
};
