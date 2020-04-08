/**
 * pros + cons of using promises vs. callback in middleware
 */

const model = require('../Models/kyodieModels.js')
const userController = {}


userController.getUsers = (req, res, next) => {
    // model.User.find({}, (data) => {
    //     res.locals.users = data
    //     console.log('res.locals', data)
    //     return next()
    // })

    model.User.find({}).exec()
    .then((data) => {
        res.locals.users = data
        return next()
    })
}

userController.createUsers = (req, res, next) => {
    const { userName, password } = req.body
    model.User.create({userName: userName, password: password}, (data) => {
        return next()
    })
}

userController.verifyLoggedIn = (req, res, next) => {
     
}



module.exports = userController
