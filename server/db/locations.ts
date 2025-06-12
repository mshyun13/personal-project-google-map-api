import connection from './connection.ts'

export async function getAllLocations(db = connection) {
  return db('locations').select()
}
