import User from "../models/user.model.js"



export  const validateEmail = async (req , res,  next ) => {


    let email = req.body.email

    let user = await User.findAll({
        where:{
            email:email
        }
    })

    if(user.length  > 0)
        return res.status(404).json({"msg" : "Email already registered"})

    next();
}


export const validateAUP = async (req , res,  next ) => {


    let AUP = req.body.AUP

    if (!AUP)
        return res.status(404).json({"msg" : "Debes aceptar terminos y condiciones"})

    next();
}


