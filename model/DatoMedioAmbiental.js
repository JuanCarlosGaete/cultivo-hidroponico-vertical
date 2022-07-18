const mongoose = require("mongoose");

const datoMediambientalSchema = mongoose.Schema({
    co2:{
        type: Number,
        required:true
    },
    humedad:{
        type: Number,
        required:true
    },
    temperatura:{
        type: Number,
        required:true
    }
   
    
});

module.exports = mongoose.model('datoMediambiental', datoMediambientalSchema);