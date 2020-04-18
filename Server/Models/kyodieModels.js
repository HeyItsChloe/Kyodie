 /* Connecting the database */
 const mongoose = require('mongoose')
 const MONGO_URI = 'mongodb+srv://kyodie:blahblah@cluster0-0mh8a.mongodb.net/test?retryWrites=true&w=majority'

 mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Kyodie'
 })
.then(() => console.log('Connected to Mongo'))
.catch(err => console.log(err));

/* Forum Comment Schema */
const Schema = mongoose.Schema
const commentSchema = new Schema({
    title: String,
    comment: String,
    user_id: { 
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})
const Comment = mongoose.model('comment', commentSchema)

/* Kyodie User Schema */
const userSchema = new Schema({
    userName: String,
    password: String,
})
const User = mongoose.model('user', userSchema)

module.exports = {
    Comment,
    User
}

