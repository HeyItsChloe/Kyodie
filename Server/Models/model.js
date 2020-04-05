/** SQL
 * Table:
 * 
 */
// const { Pool } = require('pg');

// const pool = new Pool ({
//     connectionString = ''
// });

// module.exports= {
//     query : (text, values, callback) => {
//         console.log('executed query:', text, ' with these values:', values, ' and this callback:', callback)
//         return pool.query(text, values, callback)
//     }
// }



/** MONGO DB
 * Connect the DB
 * Set up schema
 * Create a model
 * Export models in obj to be used in controller
 */

 const mongoose = require('mongoose')
 const MONGO_URI = 'mongodb+srv://kyodie:blahblah@cluster0-0mh8a.mongodb.net/test?retryWrites=true&w=majority'

 mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Kyodie'
 })
.then(() => console.log('Connected to Mongo'))
.catch(err => console.log(err));

const Schema = mongoose.Schema

const forumSchema = new Schema({
    name: String,
    comment: String,
})

const Forum = mongoose.model('forum', forumSchema)

module.exports = {
    Forum
}

