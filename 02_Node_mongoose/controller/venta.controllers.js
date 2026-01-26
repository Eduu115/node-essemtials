const express = require("express");
const ruta = express.Router();

const VentaModel = require("../model/venta.model.js");
const CocheModel = require("../model/coche.models.js");
const UsuarioModel = require("../model/usuario.models.js")

class VentaController {

    async registro(req,res){
        try{
            // obtenemos user
            const usuario = await  UsuarioModel.findById(req.body.idUsuario);
            if (!usuario)
                return res.status(404).send("Usuario no existe")
            // obtenemos coche
            const coche = await CocheModel.findById(req.body.idCoche)
            if (!coche)
                return res.status(404).send("Coche no existe") 
            // comprobamos si esta vendido
            if (coche.isVendido)
                return res.status(400).send("Coche ya vendido")

            // creamos la venta
            const venta = new VentaModel({
                idUsuario: usuario._id,
                idCoche: coche._id,
                precio: coche.precio
            });

            const result = await venta.save()
            
            coche.isVendido = true;
            await coche.save();

            return res.status(201).json({message: "Venta registrada correctamente"})
        
        }catch(err){
        
            console.error("Error en el registro de Venta", err)
            return res.status(500).json({message: "Error interno", error: err.message})
        
        }
    }
}

module.exports = new VentaController();
module.exports = ruta;