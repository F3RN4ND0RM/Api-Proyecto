const express = require('express');
const router = express.Router();
const {check} = require ("express-validator");
const {getCasos, postCaso, deleteCaso, updateCaso} = require("../controller/casos.controller")
const {validateCasos} = require("../middlewares/validate-casos");
const {validateForm } = require('../middlewares/validate-form');
const {validateRol} = require("../middlewares/validate-rol")
const { NUMBER } = require('sequelize');
const { validateToken } = require('../middlewares/validate-jwt');


router.get('/casos',
    [validateToken],
    getCasos)


router.post('/casos',
    [check("nombre", "El nombre no puede estar vacio").notEmpty(),
    check("descripcion", "La descripcion no debe estar vacia").notEmpty(),
    check("tipo", "El tipo no debe estar vacio").notEmpty(),
    check("descripcion", "La descripcion no debe estar vacia").notEmpty(),
    check("id_cliente", "El Cliente no debe estar vacio").isNumeric(),
    check("descripcion", "La descripcion no debe estar vacia").notEmpty(),
    validateToken,
    validateRol,
    validateForm,
    validateCasos],
    postCaso)

router.put('/casosupdate/:id',
    [check("nombre", "El nombre no puede estar vacio").notEmpty(),
        check("descripcion", "La descripcion no debe estar vacia").notEmpty(),
        check("tipo", "El tipo no debe estar vacio").notEmpty(),
        check("descripcion", "La descripcion no debe estar vacia").notEmpty(),
        check("id_cliente", "El Cliente no debe estar vacio").isNumeric(),
        check("descripcion", "La descripcion no debe estar vacia").notEmpty(),
        validateToken,
        validateRol,
        validateForm,
        validateCasos],
    updateCaso
)


router.delete('/casos/:id',
    validateToken,
    deleteCaso
)






module.exports = router