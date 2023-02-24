const router = require('express').Router()
const places = require('../models/places')

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/tables.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.jpg'
      }]
      
    res.render('place/index', { places })
})

module.exports = router