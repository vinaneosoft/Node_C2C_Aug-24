var connection ;
async function makeConnection(){
     connection = await mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        database : 'nodetraining'  // use sql mini project database here
      }); 

    connection.connect().then((success)=>console.log("connected...."))
    .catch((err)=>console.log(err));
    return connection;
}
module.exports=makeConnection; 

