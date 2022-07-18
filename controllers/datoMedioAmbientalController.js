
 const DatoMedioAmbiental = require("../model/DatoMedioAmbiental")

module.exports.crear = function(req, res){
     console.log('POST');
     console.log(req.body);
     var datoMedioAmbiental = new DatoMedioAmbiental({
         co2: req.body.co2,
         humedad: req.body.humedad,
         temperatura: req.body.temperatura
     });

    datoMedioAmbiental.save(function(err, datoMedioAmbiental ){

        if(err) return res.status(500).send(err.message);
    
    res.status(200).jsonp(datoMedioAmbiental)
    });

         
};
