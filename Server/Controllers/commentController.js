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
    const { id } = req.params
    model.Comment.create({title: req.body.title, comment: req.body.comment, user_id: id}, (err, comment) => {
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
    const id = req.params.id
    model.Comment.deleteOne({id: id}, (err, comments) => {
        if (err){
            console.log(err)
        }
        res.locals.comments = comments
        return next()
    })
}

module.exports = commentController;