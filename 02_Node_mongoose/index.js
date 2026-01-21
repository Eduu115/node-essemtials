const express = require("express") //Importo express
const mongoose = require("mongoose") //Importo mongoose
const app = express() //Creo la app con express
const bodyParser = require("body-parser")

// RUTAS
const rutaCoches = require("./routes/coche.routes")
const rutaUsuarios = require("./routes/usuario.routes")

// MIDDLEWARES
app.use(express.json()) //Middleware para que la app pueda entender JSON
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/coches", rutaCoches) //Middleware para que la app pueda usar las rutas de los coches
app.use("/api/usuarios", rutaUsuarios) //Middleware para que la app pueda usar las rutas de los usuarios

mongoose.connect("mongodb://127.0.0.1:27017/bbdd-coches-2526") //Conecto a MongoDB
    .then(() => console.log("Conexión exitosa a MongoDB"))
    .catch(() => console.log("Error al conectar a MongoDB"));

app.listen(3000, () => console.log("Node arrancado por el puerto 3000")) //Arranco el servidor
