const model = require('../Models/kyodieModels.js')
const commentController = {}

commentController.getComments = (req, res, next) => {
    model.Comment.find({}, (err, comments) => {
        if (err){
            return next({
                err: 'err in getCommnets'
            })
        } else {
            res.locals.comment = comments
            return next()
        }
    })
} 

commentController.getCommentsByUserId = (req, res, next) => {
    const { id } = req.params
    model.Comment.find({user_id: id}).exec()
    .then((data, err) => {
        if (err){
            return next({
                err: 'err in getCommnets'
            })
        } else {
            res.locals.userComments = data
            return next()
        }    
    })
}

commentController.postComments = (req, res, next) => {
    console.log('in comment controller res.locals.auth', res.locals.auth)
    const { auth } = res.locals
    model.Comment.create({title: req.body.title, comment: req.body.comment, user_id: auth}, (err, comment) => {
        if (err) {
            return next({
                err: 'err in postComments'
            })
        } else {
            return next()
        }
    })
}

commentController.deleteComments = (req, res, next) => {
    const { id } = req.params
    model.Comment.deleteOne({_id: id}, (err, comments) => {
        if (err){
            console.log(err)
        }
        res.locals.comments = comments
        return next()
    })
}

module.exports = commentController;