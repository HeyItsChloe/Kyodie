const express = require('express')
const router = express.Router()
const userController = require('../Server/Controllers/userController.js')
const cookieController = require('../Server/Controllers/cookieController.js')
const sessionController = require('../Server/Controllers/sessionController.js')

router.get('/', userController.getUsers, (req, res) => {
    res.status(200).json(res.locals.users)
})

router.post('/signup/:id', 
    userController.createUsers,   
    sessionController.startSession,
    cookieController.setSSIDCookie, 
    (req, res) => {
        res.redirect('/')
}) //userController.verifyUser,

router.post('/login', 
    userController.verifyUser,   
    sessionController.startSession,
    cookieController.setSSIDCookie, 
    (req, res) => {
        res.status(200).json(res.locals.auth)
})

module.exports = router