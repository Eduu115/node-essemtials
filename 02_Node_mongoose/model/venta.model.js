const mongoose = require("mongoose");

const ventaSchema = new mongoose.Schema({
    coche: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coche",
        required: true
    },
    
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"usuario",
        required: true
    },

    precio: Number

},
{
    versionKey: false, timestamps: true
});

const Venta = mongoose.model('venta', ventaSchema);

module.exports = Venta