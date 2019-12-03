const mysql = require('mysql');

function connect(){
    const connection = mysql.createConnection({
        host:'192.168.1.33',
        user: 'root',
        password:'manager',
        database:'myapp_db',
        port:9099
    })

    connection.connect()
    return connection
}

module.exports = {
    connect:connect
}