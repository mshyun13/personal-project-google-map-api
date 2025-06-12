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

export default router
