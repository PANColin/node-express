const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db_blog',
    port: 3306
})
// 封装请求
function requestQuery(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql,(err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    connection,
    requestQuery
}