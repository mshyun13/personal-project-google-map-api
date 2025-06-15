import request from 'superagent'
import { LocationData } from '../../models/locations'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getLocations() {
  const response = await request.get(`${rootURL}/locations`)
  return response.body
}

export async function addLocation(newLocation: LocationData) {
  await request.post(`${rootURL}/locations`).send({ newLocation })
}

export async function deleteLocation(locationId: number) {
  console.log(locationId)
  await request.delete(`${rootURL}/locations/${locationId}`)
}

export async function getSingleLocations(id: string | undefined) {
  const response = await request.get(`${rootURL}/locations/${id}`)
  return response.body[0]
}

export async function editLocation(id: string, updateLocation: LocationData) {
  await request.patch(`${rootURL}/locations/${id}`).send({ updateLocation })
}
