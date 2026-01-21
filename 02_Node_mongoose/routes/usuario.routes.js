const express = require("express"); //Importo express
const ruta = express.Router(); //Importo express router
const usuarioController = require("../controller/usuario.controller"); //Importo el controlador

ruta.get("/cargaInicial",usuarioController.cargaInicial); //Ruta para cargar los usuarios
ruta.get("/", usuarioController.findAll); //Ruta para buscar todos los usuarios
ruta.post("/login", usuarioController.findByusernameAndPassword); //Ruta para login
ruta.get("/:id", usuarioController.findById); //Ruta para buscar usuario por id
ruta.post("/", usuarioController.insertOne); //Ruta para insertar un usuario
ruta.put("/:id", usuarioController.updateOne); //Ruta para actualizar un usuario
ruta.delete("/:id", usuarioController.deleteOne); //Ruta para eliminar un usuario

module.exports = ruta;