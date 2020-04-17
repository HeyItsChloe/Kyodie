/**
 * pros + cons of using promises vs. callback in middleware
 */

/**
 * sign up - create a new user
 * log in - verify if user exists in DB
 * post comment - create comment in DB joined to user in DB (using params)
 *      - forum only available when logged in?
 *      - get user id from params in /forum/comments? 
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

userController.verifyUser = (req, res, next) => {
  /**
   * verify and redirect to sign up or homepage (with /:_id)
   *  */   
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
    console.log('user id above', req.body)
    console.log('user id above 2', req.params)

    //const { comment } = req.body
    model.User.findOne({_id: id}).exec()
    .then((data, err) => {
        if(err){
            console.log('cant give user access')
        } else {
            //console.log('user id', data.id)
            return next()
        }
    })
}



module.exports = userController
