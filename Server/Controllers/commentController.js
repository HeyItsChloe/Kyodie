/** Set Up Controllers
 * GET
 *  - show all comments
 * POST
 *  - make new comment
 * DELETE
 *  - delete comment by iD
 */
const models = require('../Models/model.js')

const commentController = {}

commentController.getComments = (req, res, next, err) => {
    console.log('req.body in getComments', req.body)
    model.Forum.find({}, (err, comment) => {
        console.log('req.body.comment in getCOmments', req.body.comment)
        console.log('comments in getCOmments', comment)

        if (err){
            return next({
                err: 'err in getCommnets'
            })
        } else {
            console.log('all comments', req.body.comment)
        }
    })
}

commentController.postComments = (req, res, next, err) => {
    console.log('req.body in postComments', req.body)
    models.Forum.create({name: req.body.name, comment: req.body.comment}, (err, comment) => {
        if (err) {
            return next({
                err: 'err in postComments'
            })
        } else {
            console.log('comment saved', req.body.comment, 'name saved', req.body.name)
            return next()
        }
    })
    return next()
}

module.exports = commentController;