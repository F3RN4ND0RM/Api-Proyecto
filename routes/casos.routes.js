
import { Router } from 'express';
import { check } from 'express-validator';
import { getCasos, postCaso, deleteCaso, updateCaso } from '../controller/casos.controller.js';
import { validateCasos } from '../middlewares/validate-casos.js';
import { validateForm } from '../middlewares/validate-form.js';
import { validateRol } from '../middlewares/validate-rol.js';
import { validateToken } from '../middlewares/validate-jwt.js';

const router = Router();



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






export default router;
