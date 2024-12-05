import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('email', 255).notNullable().unique();
    table.string('password', 255).notNullable();
    table.enu('role', [
      'super_admin',
      'club_administrator',
      'tournament_organizer',
      'player',
      'scout',
    ]);
    table.boolean('is_verified').defaultTo(false);
    table.boolean('is_deactivated').defaultTo(true);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
