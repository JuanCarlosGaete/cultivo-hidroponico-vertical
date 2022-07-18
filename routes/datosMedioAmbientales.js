// const express = require('express')
// const router = express.Router()

// //const datoMedioAmbientalSchema = require("../model/DatoMedioAmbiental")

// const datoMedioAmbientalController = require('../controllers/datoMedioAmbientalController')

// router.post('/datoMedioAmbiental', datoMedioAmbientalController.crearDatoMedioAmbiental )

// module.exports = router


const express = require("express");
const router = express.Router();
const datoMedioAmbientalController = require('../controllers/datoMedioAmbientalController')


router.post('/datoMedioAmbiental', datoMedioAmbientalController.crearDatoMedioAmbiental)

// router.post("/datoMediAmbiental", (req, res)=>{
//     const datoMedioAmbiental = datoMediambientalSchema(req.body);
//     datoMedioAmbiental
//         .save()
//         .then((data) => res.json(data))
//         .catch((error) => res.json({ message: error}));
// })

module.exports = router;
