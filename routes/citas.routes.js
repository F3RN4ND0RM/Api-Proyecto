import express from 'express';
import { Router } from 'express';
import { check } from 'express-validator';
import { getCitas, postCitas, deleteCitas } from '../controller/citas.controller.js';
import { validateCitas } from '../middlewares/validate-citas.js';
import { validateForm } from '../middlewares/validate-form.js';
import { validateRol } from '../middlewares/validate-rol.js';
import { NUMBER } from 'sequelize';
import { validateToken } from '../middlewares/validate-jwt.js';

const router = Router();


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

export default router;
