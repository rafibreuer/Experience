
exports.up = function(knex, Promise) {
   return knex.schema.createTable('kollel_shul', table => {
        table.increments('id').primary();
        table.integer('kollel_id').unique();
        table.integer('users_id');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kollel_shul');
};
