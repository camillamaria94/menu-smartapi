
exports.up = function (knex) {
    return knex.schema.createTable('tb_recipeEquipment', (table) => {
        table
            .bigIncrements('id')
            .notNullable()
            .primary();

        table
            .integer('idRecipe')
            .notNullable()

        table
            .integer('idEquipment')
            .notNullable()

        table
            .boolean('primary')

        table.foreign('idRecipe').references('id').inTable('tb_recipe');
        table.foreign('idEquipment').references('id').inTable('tb_equipment');


    });
};

exports.down = function (knex) {

};
