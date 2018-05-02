const mySQL = require('mysql');

var connection;
if(process.env.JAWSDB_URL){
   connection = mySQL.createConnection(process.env.JAWSDB_URL);
}else{
   connection = mySQL.createConnection({
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'things_db'
  });
}

//test connection
connection.connect((error)=>{
    if(error){
        console.log("Connection error: ", error.code, error.message);
    }
});
//to use in orm.js
module.exports = connection;

