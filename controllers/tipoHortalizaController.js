const TipoHortaliza = require('../model/TipoHortaliza')

//Mostrar

module.exports.mostrar = (req, res)=>{
    TipoHortaliza.find({}, (error, tipoHortalizas) =>{
        if(error){
            return res.status(500).json({
                message: 'Error al encontrar hortalzias'
            })
        }
        return res.render('tipoHortaliza', {tipoHortalizas, tipoHortalizas})
    })
}

//Crear

module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const tipoHortaliza = new TipoHortaliza({
        nombre: req.body.nombre
    })
    tipoHortaliza.save(function(error,tipoHortaliza){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el tipoHortaliza'
            })
        }
        res.redirect('/tipoHortaliza')
    })
}

//Editar

module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    TipoHortaliza.findByIdAndUpdate(id, {nombre}, (error, tipoHortaliza)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el tipoHortaliza'
            })
        }
        res.redirect('/tipoHortaliza')
    })
}

//Borrar

module.exports.borrar = (req, res)=>{
    const id = req.params.id
    TipoHortaliza.findByIdAndRemove(id, (error, tipoHortaliza)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el tipoHortaliza'
            })
        }
        res.redirect('/tipoHortaliza')
    })
}





