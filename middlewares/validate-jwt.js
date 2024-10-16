import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';


export  const validateToken = async (req,res,next) =>{
    
    try{
        const token = req.headers.authtoken;

        if(!token)
            return res.status(400).json({msg: "Not authenticated"});

        jwt.verify(token, process.env.SECRET, async  (err, user) => {
            
            if(err)
                return res.status(400).json({msg: "invalid authentication"})

            let usuario = await User.findByPk(user.id, {
                attributes : ['id', 'rol']
            })


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


