import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('table_name').del();

  // Inserts seed entries
  await knex('user_roles').insert([
    { id: 1, type: 'Super_admin' },
    { id: 2, type: 'Club_administrator' },
    { id: 3, type: 'Tournament_organizer' },
    { id: 4, type: 'Player' },
    { id: 5, type: 'Scout' },
  ]);
}
