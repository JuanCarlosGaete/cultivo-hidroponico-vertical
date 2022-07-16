const express = require('express')
const router = express.Router()

router.post("/datoMedioAmbiental", (req, res)=>{
    const datoMedioAmbiental = datoMediambientalSchema(req.body);
    datoMedioAmbiental
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
})


module.exports = router

//crear tipo_hortaliza

