
exports.up = function(knex) {
    return knex.schema.createTable('tb_recipeIngredients',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();

        table
        .integer('idRecipe')
        .notNullable()

        table
        .integer('idIngredient')
        .notNullable()

        table
        .boolean('primary')

        table.foreign('idRecipe').references('id').inTable('tb_recipe');
        table.foreign('idIngredient').references('id').inTable('tb_ingredients');


});
};

exports.down = function(knex) {
  
};
