const mongoose = require("mongoose");

const datoMediambientalSchema = mongoose.Schema({
    co2:{
        type: Number,
    },
    humedad:{
        type: Number,
    },
    temperatura:{
        type: Number,
    }
   
    
});

module.exports = mongoose.model('datoMediambiental', datoMediambientalSchema);