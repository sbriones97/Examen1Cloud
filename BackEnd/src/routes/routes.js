const express = require('express')
const peticionesController = require('../controllers/peticiones')


const router = express.Router()

router.post('/peticion', (req, res) => {
    peticionesController(res, req.body)
})

module.exports = router