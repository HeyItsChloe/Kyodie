/**
 * Table:
 * 
 */


const { Pool } = require('pg');

const pool = new Pool ({
    connectionString = ''
});

module.exports= {
    query : (text, values, callback) => {
        console.log('executed query:', text, ' with these values:', values, ' and this callback:', callback)
        return pool.query(text, values, callback)
    }
}