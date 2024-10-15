const express = require('express');
const router = express.Router();
const {check} = require ("express-validator");
const {getCitas, postCitas, deleteCitas} = require("../controller/citas.controller")
const {validateCitas} = require("../middlewares/validate-citas");
const {validateForm } = require('../middlewares/validate-form');
const {validateRol} = require("../middlewares/validate-rol")
const { NUMBER } = require('sequelize');
const { validateToken } = require('../middlewares/validate-jwt');


router.get('/citas',
    [validateToken],
    getCitas)


router.post('/citas',
    [check("fecha", "Fecha incorrecta").isDate({ format: 'DD/MM/YYYY' }),
    check("hora", "La hora no debe estar vacia").notEmpty(),
    check("id_cliente", "Cliente vacio").isNumeric(),
    validateToken,
    validateRol,
    validateForm,
    validateCitas],
    postCitas)


router.delete('/citas/:id',
    validateToken,
    deleteCitas
)

module.exports = router