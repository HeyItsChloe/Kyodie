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
const router = express.Router()

const commentController = require('../Server/Controllers/commentController.js')

router.get('/forum', /* add controllers here */ (req, res, next) => {
    res.status(200).json()
})

// router.post('/forum', commentController.postComments, (req, res, next) => {
//     console.log('in post /forum in server')
//     res.status(200)
// })

module.exports = router