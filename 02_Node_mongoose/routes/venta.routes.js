const  express = require("express");
const ruta = express.Router();
const ventaController = require("../controller/venta.controllers");

ruta.post("/", ventaController.registro);

module.exports = ruta;