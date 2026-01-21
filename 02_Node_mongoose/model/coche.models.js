const mongoose = require("mongoose")

const cocheSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    precio: Number,
    anio: {
        type: Number,
        required: true,
        min: 1900,
        max: 2026
    },
    isVendido: {
        type: Boolean,
        default: false
    },
    extras: [String]
}, { versionKey: false, timestamps: true }) //timestamps crea dos campos: createdAt y updatedAt, versionKey evita que se cree el campo __v

const CocheModel = mongoose.model("Coche", cocheSchema)

module.exports = CocheModel //Exporto el modelo
