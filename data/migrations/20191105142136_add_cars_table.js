
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments();
      table.string('vin', 20).notNullable();
      table.string('make', 64).notNullable();
      table.string('model', 255).notNullable();
      table.integer('mileage').notNullable();
      table.string('transmission', 256);
      table.string('title status', 256);
      

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
