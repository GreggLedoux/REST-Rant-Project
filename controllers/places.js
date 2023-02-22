const router = require('express').Router()

app.get('/', (req, res) => {
    let places = []
    res.render('places/index')
})

module.exports = router