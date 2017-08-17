
exports.up = function(knex, Promise) {
  return knex.schema.createTable('kollels', table => {
        table.increments('id').primary();
        table.string('email').unique();
        table.integer('taken');
        table.string('about');
        table.string('name');
        table.string('location');
        table.string('phone');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kollels');
};
