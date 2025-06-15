import { LocationData } from '../../models/locations.ts'
import connection from './connection.ts'

export async function getAllLocations(db = connection) {
  return db('locations').select()
}

export async function addLocation(newLocation: LocationData, db = connection) {
  await db('locations').insert({
    name: newLocation.name,
    lat: newLocation.lat,
    lng: newLocation.lng,
  })
}

export async function deleteLocation(id: number, db = connection) {
  await db('locations').where('id', id).delete()
}

export async function getSingleLocation(id: number, db = connection) {
  return db('locations').where('id', id).select()
}

export async function editLocation(
  id: number,
  name: string,
  lat: string,
  lng: string,
  db = connection,
) {
  return await db('locations').where('id', id).update({ name, lat, lng })
}
