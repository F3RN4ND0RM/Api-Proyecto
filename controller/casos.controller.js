
const { body } = require("express-validator");

const { Op} = require('sequelize');
const Caso = require("../models/casos.model");

exports.getCasos = async (req, res) => {

    
    try{

        id = req.body.user.id

        const casos = await Caso.findAll({
            where : {
                [Op.or] : [ {id_cliente : id}, {id_abogado : id}]
            }
        })
        


        return casos
            ? res.status(200).json({casos : casos})
            : res.status(404).json({msg : "Sin resultados"})


    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}


exports.postCaso = async (req, res) => {
    try{


        let caso = req.body


        caso = await Caso.create(caso)


        if(!caso)
            return res.status(400).json("Algo Salio Mal")


        return res.status(200).json({msg:caso})

    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}




exports.updateCaso = async (req, res) => {
    try{
        

        const id = req.params.id
        
        const body = req.body
        const id_user =  req.body.user.id
        
        


        caso = await Caso.findByPk(id, {
            where : {
                [Op.or] : [ {id_cliente : id_user}, {id_abogado : id_user}]
            }
        })
        

        if (!caso)
            return res.status(400).json("Caso no existe")

        caso.update(body)
        

        return res.status(200).json(`El caso ${caso.id} se ha actualizado`)

    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}



exports.deleteCaso = async (req, res) => {
    try{

        const id_user =  req.body.user.id
        const id = req.params.id
        


        caso = await Caso.findByPk(id, {
            where : {
                [Op.or] : [ {id_cliente : id_user}, {id_abogado : id_user}]
            }
        })
        

        if (!caso)
            return res.status(400).json("Caso no existe")

        caso.update({status:  0})

        return res.status(200).json(`El caso ${caso.id} se ha marcado como terminado`)

    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}