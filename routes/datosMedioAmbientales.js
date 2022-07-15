const express = require('express')
const router = express.Router()

const datoMedioAmbientalController = require('../controllers/datoMedioAmbiental')

router.get('/datoMedioAmbiental', datoMedioAmbientalController.crear)

module.exports = router