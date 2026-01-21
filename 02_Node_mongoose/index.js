const express = require("express") //Importo express
const mongoose = require("mongoose") //Importo mongoose
const app = express() //Creo la app con express
const bodyParser = require("body-parser")

const rutaCoches = require("./routes/coche.routes")

const ruta = require("./routes/coche.routes") //Importo las rutas

app.use(express.json()) //Middleware para que la app pueda entender JSON
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/coches", ruta) //Middleware para que la app pueda usar las rutas


mongoose.connect("mongodb://127.0.0.1:27017/bbdd-coches-2526") //Conecto a MongoDB
    .then(() => console.log("Conexión exitosa a MongoDB"))
    .catch(() => console.log("Error al conectar a MongoDB"));


app.listen(3000, () => console.log("Node arrancado por el puerto 3000")) //Arranco el servidor

