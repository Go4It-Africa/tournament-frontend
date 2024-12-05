// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DEV_PG_HOST,
      port: process.env.DEV_PG_HOST,
      database: process.env.DEV_PG_DB,
      user: process.env.DEV_PG_ADMIN,
      password: process.env.DEV_PG_PASSWORD,
      ssl: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'src/db/migrations/dev',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: 'src/db/seeds/dev',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.STAGING_PG_HOST,
      port: process.env.STAGING_PG_HOST,
      database: process.env.STAGING_PG_DB,
      user: process.env.STAGING_PG_ADMIN,
      password: process.env.STAGING_PG_PASSWORD,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'src/db/migrations/staging',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: 'src/db/seeds/dev',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.PROD_PG_HOST,
      port: process.env.PROD_PG_HOST,
      database: process.env.PROD_PG_DB,
      user: process.env.PROD_PG_ADMIN,
      password: process.env.PROD_PG_PASSWORD,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'src/db/migrations/prod',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: 'src/db/seeds/dev',
    },
  },
};
