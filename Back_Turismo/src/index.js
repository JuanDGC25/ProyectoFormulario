
const express = require('express');
const path = require("path"); 
const bodyParser = require('body-parser');
const cors = require('cors');


const rutaZona = require('./routers/Mod zonas EJEMPLO/zonasRouter.js');



const app = express();
const PORT = process.env.PORT || 3001;
const optionsCors = {
    origin: `http://localhost:3000 `|| `exp://192.168.0.6:8081`,
    methods: 'GET, POST, PUT, DELETE',
    optionsSuccessStatus: 200,  
};
app.use(cors(optionsCors)); 

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/zonas', rutaZona); 

 
app.get("/", (req, res) => { // Mensajes de pagina principal.
    res.send("¡Hola! Este es el servidor backend!");
    console.log("¡Hola! Este es el servidor backend!");
});

// - Listen del puerto.
app.listen(PORT, ()=>{


    console.log(`\n\n     El servidor funcionando en el puerto: \x1b[33m[${PORT}]\x1b[33m.`);
    console.log(`\n     Local:                  http://localhost:${PORT}\x1b[0m\n`);
});
