const Cultivo = require('../model/Cultivo')
const TipoHortaliza = require('../model/TipoHortaliza')

//traer datos de hortalizas

module.exports.hortalizas = (req, res)=>{
    TipoHortaliza.find({}, (error, tipoHortalizas) =>{
        if(error){
            return res.status(500).json({
                message: 'Error al encontrar hortalzias'
            })
        }
        return res.render('cultivo', {tipoHortalizas, tipoHortalizas})
    })
}

//Mostrar

module.exports.mostrar = (req, res)=>{
    Cultivo.find({}, (error, cultivos) =>{
        if(error){
            return res.status(500).json({
                message: 'Error al encontrar cultivos'
            })
        }
        TipoHortaliza.find({}, (error, tipoHortalizas) =>{
            if(error){
                return res.status(500).json({
                    message: 'Error al encontrar hortalzias'
                })
            }
            return res.render('cultivo', {tipoHortalizas, tipoHortalizas})
        })
        return res.render('cultivo', {cultivos, cultivos}, {tipoHortalizas, tipoHortalizas})
    })
}
//Crear

module.exports.crearCultivo = (req, res)=>{
    //console.log(req.body)
    const cultivo = new Cultivo({
        lote: req.body.lote,
        cantidad: req.body.cantidad,
        fechaInicio: req.body.fechaInicio
    })
    cultivo.save(function(error,cultivo){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el cultivo'
            })
        }
        res.redirect('/cultivo')
    })
}

//Editar

module.exports.editarCultivo = (req,res)=>{
    const id = req.body.id_editar
    const lote = req.body.lote_editar
    const cantidad = req.body.cantidad_editar
    const fechaInicio = req.body.fechaInicio_editar
    Cultivo.findByIdAndUpdate(id, {lote, cantidad,fechaInicio}, (error, cultivo)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el cultivo'
            })
        }
        res.redirect('/cultivo')
    })
}
//Borrar

module.exports.borrarCultivo = (req, res)=>{
    const id = req.params.id
    Cultivo.findByIdAndRemove(id, (error, cultivo)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el cultivo'
            })
        }
        res.redirect('/cultivo')
    })
}

