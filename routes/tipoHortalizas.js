const express = require('express')
const router = express.Router()

const tipoHortalizaController = require('../controllers/tipoHortalizaController')

router.get('/tipoHortaliza', tipoHortalizaController.mostrar)

router.post('/crear', tipoHortalizaController.crear)

router.post('/editar', tipoHortalizaController.editar)

router.get('/borrar/:id', tipoHortalizaController.borrar)

module.exports = router
