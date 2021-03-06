const mongoose = require("mongoose");
const Schema = mongoose.Schema

const cultivoSchema = new Schema({
    lote:{
        type: String,
        required:true
    },
    cantidad:{
        type: Number,
        required:true
    },
    fechaInicio:{
        type: Date,
        required:true
    },
    tipoHortaliza:[{
        type: mongoose.Types.ObjectId, ref:'tipoHortaliza',
        required:true
    }],
    
});

module.exports = mongoose.model('cultivo', cultivoSchema);

