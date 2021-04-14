import express from "express"

import ConcertVenue from "../../../models/ConcertVenue.js"

const concertVenuesRouter = express.Router()

concertVenuesRouter.get('/', async (req, res) => {
  try {
    // call and await findAll() and save the result to a variable
    const concertVenues = await ConcertVenue.findAll()
    // return the result as JSON
    res.json({ concertVenues: concertVenues })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})

concertVenuesRouter.post('/', async (req, res) => {
  // debugger
  try {
    console.log(req.body)
    const newConcertVenue = new ConcertVenue(req.body)
    await newConcertVenue.save()
    res.json({ newConcertVenue })
  } catch (error) {
    console.log(error)
    res.json( {errors: error} )
  }
})

export default concertVenuesRouter
