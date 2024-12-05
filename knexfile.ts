// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'go4it_sports_backend_dev',
      user: 'admin_go4it_sports',
      password: '9GCKqwYk8giGjb2XnKWK',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'src/db/migrations/dev',
      tableName: 'knex_migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'go4it_sports_backend_dev',
      user: 'admin_go4it_sports',
      password: '9GCKqwYk8giGjb2XnKWK',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'src/db/migrations/staging',
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'go4it_sports_backend_prod',
      user: 'admin_go4it_sports',
      password: '9GCKqwYk8giGjb2XnKWK',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'src/db/migrations/prod',
      tableName: 'knex_migrations',
    },
  },
};
