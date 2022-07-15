const express = require('express')
const router = express.Router()

const cultivoController = require('../controllers/cultivoController')

router.get('/cultivo', cultivoController.mostrar)

router.get('/tipoHortaliza', cultivoController.hortalizas)

router.post('/crearCultivo', cultivoController.crearCultivo)

router.post('/editarCultivo', cultivoController.editarCultivo)

router.get('/borrarCultivo/:id', cultivoController.borrarCultivo)

module.exports = router
