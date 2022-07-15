const mongoose = require("mongoose");
const Schema = mongoose.Schema

const tipoHortalizaSchema = new Schema ({
    nombre: String
}, {versionKey:false})

module.exports = mongoose.model('tipoHortaliza', tipoHortalizaSchema);
