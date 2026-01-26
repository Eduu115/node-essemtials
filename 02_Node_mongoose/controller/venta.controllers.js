const VentaModel = require("../model/venta.model.js");
const CocheModel = require("../model/coche.models.js");
const UsuarioModel = require("../model/usuario.models.js")

class VentaController {

    async registro(req,res){
        try{
            // obtenemos user
            const usuarioVenta = await  UsuarioModel.findById(req.body.idUsuario);
            if (!usuarioVenta)
                return res.status(404).send("Usuario no existe")
            // obtenemos coche
            const cocheVenta = await CocheModel.findById(req.body.idCoche)
            if (!cocheVenta)
                return res.status(404).send("Coche no existe") 
            // comprobamos si esta vendido
            if (cocheVenta.isVendido)
                return res.status(400).send("Coche ya vendido")

            // creamos la venta
            const venta = new VentaModel({
                idUsuario: usuarioVenta._id,
                idCoche: cocheVenta._id,
                precio: cocheVenta.precio
            });

            const result = await venta.save()
            
            cocheVenta.isVendido = true;
            const cocheResultado = await cocheVenta.save();

            return res.status(201).json({message: "Venta registrada correctamente", result, " Coche vendido": cocheResultado})
        
        }catch(err){
        
            console.error("Error en el registro de Venta", err)
            return res.status(500).json({message: "Error interno", error: err.message})
        
        }
    }
}

module.exports = new VentaController();