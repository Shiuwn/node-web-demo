// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development:{
    client: 'postgresql',
    connection: {
      database: 'sa_db',
      user:     'sa_user',
      password: 'pass123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  /*{
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  }*/

  staging: {
    client: 'postgresql',
    connection: {
      database: 'sa_db',
      user:     'sa_user',
      password: 'pass123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'sa_db',
      user:     'sa_user',
      password: 'pass123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
