const model = require('../Models/kyodieModels.js')
const userController = {}

userController.getUsers = (req, res, next) => {
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

userController.verifyUser = (req, res, next) => {  
  const { userName, password, _id} = req.body
  model.User.findOne({userName: userName, password: password}).exec()
  .then((data, err) => {
      if (err) {
        console.log('user does not exist')
      } else {
        res.locals.auth = data
        req.params.id = data._id
      }
      return next()
  })
}

userController.giveUserAccess = (req, res, next) => {
    const { id } = req.params
    model.User.findOne({_id: id}).exec()
    .then((data, err) => {
        if(err){
            console.log('cant give user access')
        } else {
            return next()
        }
    })
}

module.exports = userController
