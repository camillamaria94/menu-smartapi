
exports.up = function(knex) {
    return knex.schema.createTable('tb_recipe',(table) => {
        table
        .bigIncrements('id')
        .notNullable()
        .primary();
               
        table
        .string('name')
        .notNullable()
        .unique();

        table
        .string('methodPreparation');

        table
        .boolean('composed');
        
        table
        .boolean('lactose')
    
        table
        .boolean('gluten')

        table
        .integer('calories')
    
        table
        .integer('codTypeRecipe')
    
        table
        .integer('codCategory')
    
        table
        .integer('codTexture')
    
        table
        .integer('codColor')
    
        table
        .integer('codFlavor')
    
        table.foreign('codTypeRecipe').references('id').inTable('tb_typeRecipe');
        table.foreign('codCategory').references('id').inTable('tb_category');
        table.foreign('codTexture').references('id').inTable('tb_texture');
        table.foreign('codColor').references('id').inTable('tb_color');
        table.foreign('codFlavor').references('id').inTable('tb_flavor');
    

    })
  
};

exports.down = function(knex) {
  
};
