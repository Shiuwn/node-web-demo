/**
 * @typedef {import('knex/types').Knex} Knex
 */
/**
 *
 * @param {Knex} knex
 */
module.exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('first_name', 255).notNullable()
    table.string('last_name', 255).notNullable()
    table.string('email', 255).notNullable().unique()
  })
}

/**
 *
 * @param {Knex} knex
 */
module.exports.down = function (knex) {
  return knex.schema.dropTable('users')
}

module.exports.config = { transaction: false }
