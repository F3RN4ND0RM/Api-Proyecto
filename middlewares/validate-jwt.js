
const jwt = require("jsonwebtoken");
const User = require("../models/user.model")

const validateToken = async (req,res,next) =>{
    
    try{
        const token = req.headers.authtoken;

        if(!token)
            return res.status(400).json({msg: "Not authenticated"});

        jwt.verify(token, process.env.SECRET, async  (err, user) => {
            if(err)
                return res.status(400).json({msg: "invalid authentication"})


                usuario = await User.findOne({where: {
                    id : user.id
                }})


                if(!usuario )
                    return res.status(400).json({msg: "Usuario no autorizado"})

                req.body.user = usuario
                next()
        })

    }catch(error){
       
        console.log(error)
        return res.status(400).json({error: error})
    }
    
}


module.exports = { validateToken };
