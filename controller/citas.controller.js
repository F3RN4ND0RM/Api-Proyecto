const Citas = require("../models/citas.model")
const { body } = require("express-validator");

exports.getCitas = async (req, res) => {
    try{

        const citas = await Citas.findAll()


        return citas
            ? res.status(200).json({citas : citas})
            : res.status(404).json({msg : "Sin resultados"})


    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}


exports.postCitas = async (req, res) => {
    try{

        let body = req.body
        return res.json(body)

    }catch(error){
        console.log(error)
        return res.status(400).json({error: error})
    }
}
