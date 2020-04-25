 /* Connecting the database */
 const mongoose = require('mongoose');
 const MONGO_URI = 'mongodb+srv://kyodie:blahblah@cluster0-0mh8a.mongodb.net/test?retryWrites=true&w=majority';

 mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Kyodie'
 })
.then(() => console.log('Connected to Mongo'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

/* Forum Comment Schema */
const commentSchema = new Schema({
    title: String,
    comment: String,
    user_id: { 
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});
const Comment = mongoose.model('comment', commentSchema);

/* Kyodie User Schema */
const userSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});
const User = mongoose.model('user', userSchema);

/* User Session Schema */
const sessionSchema = new Schema({
    cookieId: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now, expires: '10m' }
  });
const Session = mongoose.model('session', sessionSchema);

module.exports = {
    Session,
    Comment,
    User,
};

