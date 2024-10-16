import express from 'express';
import { check } from 'express-validator';
import { validateEmail, validateAUP } from '../middlewares/validate-userForm.js';
import { getUsers, getUserByID, postUsers, loginUser, updateUser, updateRol } from '../controller/user.controller.js';
import { validateForm } from '../middlewares/validate-form.js';
import { validateToken } from '../middlewares/validate-jwt.js';
import { validateRol } from '../middlewares/validate-rol.js';

const router = express.Router();

router.get('/users',
    [validateToken, validateRol], 
    getUsers)


router.get('/usersbyid',
    validateToken, 
    getUserByID)
    

router.put('/rol',
    [   check('rol', 'rol  can not be empty').notEmpty(),
        validateToken,
        validateRol],
        updateRol
)
router.put('/updateuser', [
    check('name', 'Name can not be empty').notEmpty(),
    check('surname', 'surname can not be empty').notEmpty(),
    check('email', 'email can not be empty').isEmail(),
    check('password', 'password can not be empty').notEmpty(),
    check('address', 'address can not be empty').notEmpty(),
    check('city', 'city can not be empty').notEmpty(),  
    validateToken,
    validateForm,  
], updateUser)

router.post('/users',[
    check('name', 'Name can not be empty').notEmpty(),
    check('surname', 'surname can not be empty').notEmpty(),
    check('email', 'email can not be empty').isEmail(),
    check('password', 'password can not be empty').notEmpty(),
    check('address', 'address can not be empty').notEmpty(),
    check('neighborhood', 'neighborhood can not be empty').notEmpty(),
    check('city', 'city can not be empty').notEmpty(),
    check('state', 'state can not be empty').notEmpty(),
    check('cp', 'cp can not be empty').notEmpty(),
    check('gender', 'gender can not be empty').notEmpty(),
    check('phone', 'phone can not be empty').isMobilePhone(),    
    validateForm,
    validateEmail,
    validateAUP,
    ], postUsers)


router.post('/login',[
    check('email', 'email can not be empty').isEmail(),
    check('password', 'password can not be empty').notEmpty(),
    validateForm
    ], loginUser)

export default router;
