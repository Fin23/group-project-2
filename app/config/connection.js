//setup mySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection
        (process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vjtvjqmtzfrw5cjy",
        password: "kdynx8qyy3pmvzzl",
        database: "orgxwcvovq6sftj2"

    });
};

// connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});