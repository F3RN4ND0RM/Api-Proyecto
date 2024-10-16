
import User from '../models/user.model.js';


export  const validateRol = async (req , res,  next ) => {


    let rol = req.body.user.rol

    if(!(rol == "admin"))
        return res.status(404).json({msg : "Not authorized"})
    
    next();
}
