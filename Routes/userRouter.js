const express = require('express')
const router = express.Router()
const userController = require('../Server/Controllers/userController.js')

router.get('/', userController.getUsers, (req, res) => {
    res.status(200).json(res.locals.users)
})

router.post('/', userController.createUsers, (req, res) => {
    res.status(200).json({})
})



module.exports = router