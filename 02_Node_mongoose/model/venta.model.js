const mongoose = require("mongoose");

const ventaSchema = new mongoose.Schema({
    idCoche: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coche",
        required: true
    },
    
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
        required: true
    },

    precio: Number

},
{
    versionKey: false, timestamps: true
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta