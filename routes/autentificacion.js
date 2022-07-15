const express = require('express')
const router = express.Router()

const autentificacionController = require('../controllers/autentificacionController')

router.get('/registro', autentificacionController.mostrarRegistro)

router.get('/login', autentificacionController.mostrarLogin)

router.post('/registrar', autentificacionController.registrar)

router.post('/ingresar', autentificacionController.ingresar)

module.exports = router