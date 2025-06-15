import { Router } from 'express'

import * as db from '../db/locations.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const locations = await db.getAllLocations()
    res.json(locations)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newLocation = req.body.newLocation
    await db.addLocation(newLocation)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteLocation(id)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const location = await db.getSingleLocation(id)
    res.json(location)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { name, lat, lng } = req.body
    const updatedLocation = await db.editLocation(id, name, lat, lng)
    res.status(200).json(updatedLocation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
