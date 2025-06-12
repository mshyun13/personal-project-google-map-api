/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('locations').del()
  await knex('locations').insert([
    {
      id: 1,
      name: 'Botany Town Centre',
      lat: '-36.9334925',
      lng: '174.9085044',
    },
    { id: 2, name: 'Dev Academy', lat: '-36.864623', lng: '174.7711554' },
  ])
}
