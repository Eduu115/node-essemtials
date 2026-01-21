const express = require("express")
const app = express()
//Importo la ruta
const ruta = require("./routes/coche.routes")

//Middleware
app.use(express.json())
app.use("/api/coches", ruta)

//Rutas
app.get("/saludo", (req, res) => {
    res.status(200).send("Hola me llamo Juan y soy tu alumno ")
})

app.get("/saludo/:nombre/:edad", (req, res) => {
    let nombre = req.params.nombre
    let edad = req.params.edad
    res.status(200).send(`hola me llamo ${nombre} y tengo ${edad} años`)
})

app.get("/saludo/con-parametros", (req, res) => {
    let nombre = req.query.nombre
    let edad = req.query.edad
    res.status(200).send(`hola me llamo ${nombre} y tengo ${edad} años`)
})

app.listen(3000, () => console.log("Node arrancado por el puerto 3000"))

