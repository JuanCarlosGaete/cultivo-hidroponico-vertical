const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 9000;

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

// app.use('/', (req, res)=>{
//     res.send(' juan carlos ')
// })

// const tipoHortalizas = require('./routes/tipoHortalizas')
// app.use(tipoHortalizas)

const index = require('./routes/index')
app.use(index)

const tipoHortaliza = require('./routes/tipoHortalizas')
app.use(tipoHortaliza)

const cultivo = require('./routes/cultivos')
app.use(cultivo)

const autentificacion = require('./routes/autentificacion')
app.use(autentificacion)

const datoMedioAmbiental = require('./routes/datosMedioAmbientales')
app.use(datoMedioAmbiental)

const menu = require('./routes/menu')
app.use(menu)

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a mongo DB"))
.catch((error)=> console.error(error))

app.listen(port, () => console.log('server listening on port', port));


