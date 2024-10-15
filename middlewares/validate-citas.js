const { user } = require('pg/lib/defaults')
const User = require('../models/user.model')


const validateCitas = async (req , res,  next ) => {

    try{
        
        const id_cliente = req.body.id_cliente
        const id_abogado = req.body.id_abogado

        const cliente = await User.findByPk(id_cliente)

        console.log(id_cliente + "," + id_abogado)
        
        if (!cliente || cliente.rol != "basic")
            return res.status(400).json({msg : "cliente invalido"})

        const abogado = await User.findByPk(id_abogado)

        if (!abogado || abogado.rol != "admin")
            return res.status(400).json({msg : "abogado invalido"})

        next()

    }catch(error){
        return res.status(400).json("Algo aslio mal")
    }
}

module.exports = {
    validateCitas
}
