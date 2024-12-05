import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('clubs', (table) => {
    table.increments();
    table.string('name', 255).notNullable();
    table.string('state', 255);
    table.string('country', 255);
    table.string('address', 255);
    table.string('logo', 255);
    table
      .enu('type_of_sport', ['football', 'rugby', 'cricket', 'field_hockey'])
      .notNullable()
      .defaultTo('football');
    table.string('phone', 255).notNullable();
    table.string('email', 255).notNullable().unique();
    table.string('facebook_url', 255).defaultTo(null);
    table.string('twitter_url', 255).defaultTo(null);
    table.string('linkedin_url', 255).defaultTo(null);
    table.string('instagram_url', 255).defaultTo(null);
    table.string('website_url', 255).defaultTo(null);
    table.string('bio', 255).defaultTo(null);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('clubs');
}
