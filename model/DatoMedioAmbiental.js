const mongoose = require("mongoose");
const Schema = mongoose.Schema

const datoMedioAmbientalSchema = new Schema ({
  co2: Number,
  humedad: Number,
  temperatura: Number,
})

module.exports = mongoose.model('datoMedioAmbiental', datoMedioAmbientalSchema);