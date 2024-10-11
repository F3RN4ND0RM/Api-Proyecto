
const User = require('../models/user.model')


const validateEmail = async (req , res,  next ) => {


    email = req.body.email

    user = await User.findAll({
        where:{
            email:email
        }
    })

    if(user.length  > 0)
        return res.status(404).json({"msg" : "Email already registered"})

    next();
}


const validateAUP = async (req , res,  next ) => {


    AUP = req.body.AUP

    if (!AUP)
        return res.status(404).json({"msg" : "Debes aceptar terminos y condiciones"})

    next();
}
module.exports = {
    validateEmail,
    validateAUP
}