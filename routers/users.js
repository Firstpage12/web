const express = require('express')
const { ReturnDocument } = require('mongodb')
const { model } = require('mongoose')
 const User = require('../model/data')
const router = express.Router()

const{
    createUser,
    updateUser,
    deleteUser,
    getById,
    getAll
}= require('../controller/usercontroller')

const {validateUserSignUp,userValidation} = require('../validation/users')

router.get('/getAll',getAll)



router.post('/createuser',createUser,validateUserSignUp,userValidation)



router.get('/get/:id',getById)


router.patch('/upadte/:id',updateUser,validateUserSignUp,userValidation)



router.delete('/delete/:id',deleteUser)

module.exports=router;