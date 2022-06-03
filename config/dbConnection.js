let mysql = require('mysql');

let connMySQL = () => {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias',
        insecureAuth: true
    })
}
        
module.exports = () => {
    return connMySQL;
}
    