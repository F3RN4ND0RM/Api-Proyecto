const express = require('express');
const router = express.Router();
const {check} = require ("express-validator");
const {validateEmail, validateAUP} = require('../middlewares/validate-userForm')
const {getUsers, postUsers, loginUser, updateUser, updateRol, getUserByID} = require('../controller/user.controller');
const { validateForm } = require('../middlewares/validate-form');
const {validateToken} = require('../middlewares/validate-jwt')
const {validateRol} = require("../middlewares/validate-rol")


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
    check('neighborhood', 'neighborhood can not be empty').notEmpty(),
    check('city', 'city can not be empty').notEmpty(),
    check('state', 'state can not be empty').notEmpty(),
    check('cp', 'cp can not be empty').notEmpty(),
    check('phone', 'phone can not be empty').isMobilePhone(),    
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

module.exports = router