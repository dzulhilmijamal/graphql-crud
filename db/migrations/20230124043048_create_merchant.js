
exports.up = function(knex) {
  return knex.schema.createTable('merchant',(table)=> {
    table.increments('id');
    table.text('merchant_name').notNullable();
    table.text('phone_number').notNullable();
    table.decimal('latitude',8,5).notNullable(); //000.00000
    table.decimal('longitude',8,5).notNullable();
    table.boolean('isActive').defaultTo(false);
    table.datetime('datetime', { precision: 6 }).defaultTo(knex.fn.now(6))
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('merchant');
};
