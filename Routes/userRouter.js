const express = require('express')
const router = express.Router()
const userController = require('../Server/Controllers/userController.js')

router.get('/', userController.getUsers, (req, res) => {
    res.status(200).json(res.locals.users)
})

router.post('/signup/:id', userController.createUsers, userController.verifyUser, (req, res) => {
    console.log(req.params, 'req params router')
    //res.status(200).json({})
    res.redirect('/')
})

router.post('/login', userController.verifyUser, (req, res) => {
    res.redirect('/')
})

module.exports = router