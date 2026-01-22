const express = require("express");
const mongoose = require("mongoose");
const ruta = express.Router();
const UsuarioModel = require("../model/usuario.models.js");
const usuarios = require("../bbdd/usuarios.bbdd.js");

class UsuarioController {
// ---------------------------------------------------------- SPECIAL FUNCTIONS -----------------------------------------------------------------

    async findByusername(req, res) {
        try{
            const result = await UsuarioModel.findOne({username:req.body.username});
            if (!result) return res.status(404).send("Usuario no encontrado");
            return res.status(200).send(result);
        }catch(error){
            console.error("Error en el findByusername: ", error);
            return res.status(500).json({mensaje: "Error interno"});
        }
    }

    async findByusernameAndPassword(req, res) {
        try{
            const result = await UsuarioModel.findOne({username:req.body.username, password:req.body.password});
            if (!result) return res.status(401).send("Usuario o contraseña incorrectos");
            return res.status(200).send(result);
        }catch(error){
            console.error("Error en el findByusernameAndPassword: ", error);
            return res.status(500).json({mensaje: "Error interno"});
        }

    }
        
    async cargaInicial(req, res) {
        try{
            await UsuarioModel.insertMany(usuarios);
            return res.status(201).send("Usuarios cargados correctamente");
        }catch(error){
            console.error("Error en la carga inicial de usuarios: ", error);
            return res.status(500).json({mensaje: "Error interno"});
        }
    }
    
    
//----------------------------------------------------------- CRUD FUNCTIONS -----------------------------------------------------------------
     
    async findById(req, res) {
        try{
            const result = await UsuarioModel.findById(req.params.id);
            if (!result) return res.status(404).send("Usuario no encontrado");
            return res.status(200).send(result);
        }catch(error){
            console.error("Error en el findById: ", error);
            return res.status(500).json({mensaje: "Error interno"});
        }
    }

    async findAll(req, res) {
        const result = await UsuarioModel.find();
        return res.status(200).send(result);
    }

    async insertOne(req, res) {
        try{
            const result = await UsuarioModel.create(req.body);
            return res.status(201).send(result);
        }catch(error){
            console.error("Error en el insertOne: ", error);
            return res.status(500).json({mensaje: "Error interno"});
        }
    }

    async updateOne(req, res) {
        try{
            const result = await UsuarioModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
            if (!result) return res.status(404).send("Usuario no encontrado");
            return res.status(200).send(result);
        }catch(error){
            console.error("Error en el updateOne: ", error);
            return res.status(500).json({mensaje: "Error interno"});
        }
    }

    async deleteOne(req, res) {
        try{
            const result = await UsuarioModel.findByIdAndDelete(req.params.id);
            if (!result) return res.status(404).send("Usuario no encontrado");
            return res.status(200).send(result);
        }catch(error){
            console.error("Error en el deleteOne: ", error);
            return res.status(500).json({mensaje: "Error interno"});
        }
    }

}

module.exports = new UsuarioController();