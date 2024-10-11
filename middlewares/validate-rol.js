
const { user } = require('pg/lib/defaults')
const User = require('../models/user.model')


const validateRol = async (req , res,  next ) => {


    let rol = req.body.user.rol

    if(!(rol == "admin"))
        return res.status(404).json({msg : "Not authorized"})
    
    next();
}

module.exports = {
validateRol
}
