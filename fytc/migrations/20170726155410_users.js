
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('email').unique();
        table.string('password');
        table.string('firstName');
        table.string('name');
        table.string('location');
        table.string('phone');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};
