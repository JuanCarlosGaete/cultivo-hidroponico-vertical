const User = require('../model/User')

module.exports.mostrarRegistro = (req, res)=>{
    
    return res.render('registro')
}

module.exports.mostrarLogin = (req, res)=>{
    
    return res.render('login')
}

module.exports.registrar = (req, res)=>{
    //console.log(req.body)
    let errors = [];
    const user = new User({
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: req.body.contraseña,
        confirmar_contraseña: req.body.confirmar_contraseña
    })
    user.save(function(error,user){
        if(error){
            return res.status(500).json({
                    message: 'Error al crear el usuario'
            })
        }
        res.redirect('/login')
    })
}

module.exports.ingresar = (req, res)=>{
    res.redirect('/menu')
}

// const id = req.params.id
//     TipoHortaliza.findByIdAndRemove(id, (error, tipoHortaliza)=>{
//         if(error){
//             return res.status(500).json({
//                 message: 'Error eliminando el tipoHortaliza'
//             })
//         }
//         res.redirect('/')
//     })
