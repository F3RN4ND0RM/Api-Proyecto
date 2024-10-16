import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export const getUsers = async (req, res) => {
    try{

        const users = await User.findAll({
            attributes: ['id', 'name', 'surname', 'gender', 'email', 'address', 'neighborhood', 'city', 'state', 'cp', 'phone', 'rol'],
        })


        return users
            ? res.status(200).json({users : users})
            : res.status(404).json({msg : "Sin resultados"})


    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}



export const getUserByID = async (req, res) => {
    try{

        let id = req.body.user.id

        let user = await User.findByPk(id, {            
            attributes: ['id','name', 'surname', 'gender', 'email', 'address', 'neighborhood', 'city', 'state', 'cp', 'phone'],            
        })


        return user
            ? res.status(200).json(user)
            : res.status(404).json({msg: "Algo salio mal"})
        


    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}

export const postUsers = async (req, res) => {

    let user = req.body

    try{
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        user =await User.create(user)
        return user
        ? res.status(200).json({msg: `el usuario ${user.name} se creó correctamente` })
        : res.status(400).json({msg: `Algo salió mal` })

    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}


export const loginUser = async (req, res) => {

    try{

        
        const { email, password} = req.body

        const user = await User.findOne({where: {
            email: email
        }})


        if(!user)
            return res.status(404).json({msg : "wrong user or password"})
                           
        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword)
            return res.status(404).json({msg : "wrong user or password"})

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            rol:user.rol,
            name: user.name
        }, process.env.SECRET, {expiresIn: "1h"})
        

        return res.status(200).json({
            rol: user.rol
            ,token : token})


    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}



export const updateUser = async (req, res) => {

    try{

        let {name, surname, email, password, address, neighborhood, city, state, cp, gender, phone} = req.body

        let id = req.body.user.id
        let user = await User.findByPk(id)

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);


        user = await User.update(
            { name: name,
            surname : surname,
            email : email,
            password : password,
            address : address,
            neighborhood : neighborhood,
            city : city, 
            state : state, 
            cp : cp,
            gender :gender, 
            phone : phone,
        },{
                where: {
                    id : id
                }       
            }     
        )

        if(!user)
            return res.status(400).json({msg: "Algo Salio mal"})

        return res.status(200).json({msg: "Usuario actualizado"})
    }catch(error){
        console.log(error)
        return res.status(400).json({msg: error})
    }
}


export const updateRol = async (req, res) => {

    try{

        let user = await User.findByPk(req.body.id)
        let rol =  req.body.rol
        let id =  req.body.id

        if(!user)
            return res.status(400).json({msg: "invalid user"})

        user = await User.update({
            rol : rol},
            {
            where:{
                id : id
            }
        })


        if (!user)
            return res.state(400).json({msg: "Algo salió mal"})
        
        return res.status(200).json({msg: `Se actualizo con exito el usuario ${user.name}`})
    }catch(error){
        console.log(error)
        return res.status(400).json({msg: error})
    }
}
