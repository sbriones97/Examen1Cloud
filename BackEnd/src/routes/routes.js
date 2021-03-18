const express = require('express')
const PeticionesController = require('../controllers/peticiones')


const router = express.Router()

router.post('/peticion', (req, res) => {
    PeticionesController.peticionPost(res, req.body)
})

module.exports = router