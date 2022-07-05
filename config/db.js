const Pool = require('pg').Pool
module.exports = new Pool({
    user: 'amit',
    host: 'localhost',
    database: 'collectors',
    password: 'Amit@123',
    port: 5432
})