import Citas from '../models/citas.model.js';
import { body } from 'express-validator';
import { Op } from 'sequelize';


export const getCitas = async (req, res) => {
    try{


        let id = req.body.user.id

        const citas = await Citas.findAll({
            where : {
                [Op.or] : [ {id_cliente : id}, {id_abogado : id}]
            }
        })
        


        return citas
            ? res.status(200).json({citas : citas})
            : res.status(404).json({msg : "Sin resultados"})


    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}


export const postCitas = async (req, res) => {
    try{


        let cita = req.body


        cita = await Citas.create(cita)


        if(!cita)
            return res.status(400).json("Algo Salio Mal")


        return res.status(200).json({msg:cita})

    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}


export const deleteCitas = async (req, res) => {
    try{

        const id_user =  req.body.user.id
        const id = req.params.id
        


        let cita = await Citas.findByPk(id, {
            where : {
                [Op.or] : [ {id_cliente : id}, {id_abogado : id}]
            }
        })
        

        if (!cita)
            return res.status(400).json("Caso no existe")

        cita.update({
            status:  0
        })

        return res.status(200).json(`La Cita ${cita.id} ha sido cancelada`)

    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}