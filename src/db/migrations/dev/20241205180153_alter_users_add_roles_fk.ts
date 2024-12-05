import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('users', (table) => {
    table
      .foreign('role_id')
      .references('id')
      .inTable('user_roles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.dropColumn('role');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('role_id');
    table.enu('role', [
      'super_admin',
      'club_administrator',
      'tournament_organizer',
      'player',
      'scout',
    ]);
  });
}
