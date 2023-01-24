// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'merchant',
      user:     'postgres',
      password: 'p@ssw0rd'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_merchant_migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },
};
