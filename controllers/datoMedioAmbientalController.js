const DatoMedioAmbiental = require('../model/DatoMedioAmbiental')


module.exports.crearDatoMedioAmbiental = (req, res)=>{
    console.log('POST')
    console.log(req.body)
    const datoMedioAmbiental = new DatoMedioAmbiental({
        co2: req.body.co2,
        humedad: req.body.humedad,
        temperatura: req.body.temperatura,
    });
    datoMedioAmbiental
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}
    ));
}


