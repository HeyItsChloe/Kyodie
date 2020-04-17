const express = require('express')
const router = express.Router() 
const commentController = require('../Server/Controllers/commentController.js')

router.get('/:id', commentController.getComments , (req, res, next) => { 
    res.status(200).json(res.locals.comment)
})

router.post('/:id', commentController.postComments, (req, res, next) => { 
    res.status(200).json({})
})

router.delete('/', commentController.deleteComments, (req, res, next) => { 
    res.status(200).json(res.locals.comments)
})

module.exports = router