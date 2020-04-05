/** Set Up Controllers
 * GET
 *  - show all comments
 * POST
 *  - make new comment
 * DELETE
 *  - delete comment by iD
 */
const model = require('../Models/forumModel.js')

const commentController = {}

commentController.getComments = (req, res, next) => {
    //console.log('res in get', res)
    model.Forum.find({}, (err, comments) => {
        /* Logging req.body here is undefined b.c i named my parameter 'comment' */
        //console.log('comments in getComments', comments)
        if (err){
            return next({
                err: 'err in getCommnets'
            })
        } else {
            //console.log('all comments', comment)
            res.locals.comment = comments
            return next()
        }
    })
} 

commentController.postComments = (req, res, next) => {
    //console.log('req.body in postComments', req.body)
    model.Forum.create({name: req.body.name, comment: req.body.comment}, (err, comment) => {
        if (err) {
            return next({
                err: 'err in postComments'
            })
        } else {
            //console.log('comment saved', req.body.comment, 'name saved', req.body.name)
            return next()
        }
    })
}

commentController.deleteComments = (req, res, next) => {
    /* Delete by comment */
    // model.Forum.deleteOne({comment: req.body.comment, name: req.body.name}, (err, comments) => {
    //     if (err) {
    //         return next({
    //             err: 'err in delete comments controller'
    //         })
    //     } else {
    //         console.log('deleted this comment', req.body.comment)
    //         res.locals.comments = comments
    //         return next()
    //     }
    // })

    /* Delete by ID */
    const id = req.params.id
    //console.log('req.params.id', req.params.id)

    model.Forum.deleteOne({id: req.params.id}, (err, comments) => {
        if (err){
            console.log(err)
        }
        res.locals.comments = comments
        return next()
    })
}

module.exports = commentController;