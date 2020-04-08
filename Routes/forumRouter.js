/** SET UP ROUTER
 * require express and set up router
 * import controllers
 * add routes  
 *      - Get comments
 *      - POST comments
 *      - DELETE comments
 * export router
 */

const express = require('express')
const router = express.Router() //class to create modular, mountable route handlers

const commentController = require('../Server/Controllers/commentController.js')
const userController = require('../Server/Controllers/userController.js')


/* define the forum homepage routes */
router.get('/', commentController.getComments, (req, res, next) => {
    //console.log('in get forum')
    res.status(200).json(res.locals.comment)
})

router.post('/', commentController.postComments, (req, res, next) => {
    //console.log('req in post /forum in server', req.body)
    res.status(200).json({})
})

router.delete('/', commentController.deleteComments, (req, res, next) => { //why no params id here?
    //console.log('in delete in forumRouter', req.body)
    res.status(200).json(res.locals.comments)
})

module.exports = router