//Crear

const DatoMedioAmbiental = require("../model/DatoMedioAmbiental")

module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const datoMedioAmbiental = new DatoMedioAmbiental({
        co2: req.body.co2,
        humedad: req.body.humedad,
        temperatura: req.body.temperatura
    })
    datoMedioAmbiental.save(function(error,datoMedioAmbiental){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el datoMedioAmbiental'
            })
        }
        res.redirect('/home')
    })
}