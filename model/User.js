const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema ({
  nombre: String,
  email: String,
  contraseña: String,
})

module.exports = mongoose.model('user', userSchema);