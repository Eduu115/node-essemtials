const express = require("express"); //Importo express
const ruta = express.Router(); //Importo express router
const cocheController = require("../controller/coche.controller"); //Importo el controlador

ruta.get("/cargaInicial", cocheController.cargaInicial); //Ruta para cargar los coches
ruta.get("/", cocheController.findAll) //Ruta para buscar todos los coches
ruta.get("/marca/:marca", cocheController.findByMarca)  //Ruta para buscar coches por marca
ruta.get("/precio/:precio", cocheController.findByPrecioGreaterThan) //Ruta para buscar coches por precio
ruta.get("/:id", cocheController.findById) //Ruta para buscar coches por id
ruta.post("/", cocheController.insertOne)
ruta.put("/:id", cocheController.updateOne)
ruta.delete("/:id", cocheController.deleteOne)

module.exports = ruta 