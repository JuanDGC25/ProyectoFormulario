

const mysql = require("mysql2"); 
const nomDatabase = "Planeacion_viaje"; 


// Conexion base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Planeacion_viaje"
})


db.connect((err) =>{
    if(err){
        console.error('\n\x1b[31m',"Errorr al conectar en la base de datos.\n\n", err, '\x1b[0m\n');
        return
    }
    console.log(`\x1b[36m     Conexion Existosa a la base de datos. "${nomDatabase}"`, '\x1b[0m\n');
});

// Proceso importante, abre la conexion a la base de datos, cuando esta abirta recibe, y cuando no se cierra.
// Manejamos la se;a SIGINT
process.on("SIGINT", ()=>{
    db.end();
    process.exit();
});

module.exports = db;