const express = require('express');
const router = express.Router();
const {check} = require ("express-validator");
const {getCitas, postCitas} = require("../controller/citas.controller")
const {validateCitas} = require("../middlewares/validate-citas")


router.get('/citas',
    getCitas)


router.post('/citas',
    [check("fecha", "Fecha incorrecta").isDate(),
        validateCitas],
    postCitas)

module.exports = router