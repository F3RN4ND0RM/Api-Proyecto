const { user } = require('pg/lib/defaults')
const User = require('../models/user.model')


const validateCasos = async (req , res,  next ) => {

    try{
        
        const id_cliente = req.body.id_cliente
        const id_abogado = req.body.user.id

        const cliente = await User.findByPk(id_cliente)

        console.log(id_cliente + "," + id_abogado)
        
        if (!cliente || cliente.rol != "basic")
            return res.status(400).json({msg : "cliente invalido"})

        const abogado = await User.findByPk(id_abogado)

        if (!abogado || abogado.rol != "admin")
            return res.status(400).json({msg : "abogado invalido"}) 

        req.body.id_abogado = id_abogado
        next()

    }catch(error){
        return res.status(400).json("Algo salio mal")
    }
}

module.exports = {
    validateCasos
}
