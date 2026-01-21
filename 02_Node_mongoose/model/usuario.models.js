const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required: true,
        select: false
        
    },
    nombre: {
        type:String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    /*    validate: {
            validator: validator.isEmail,
            message: 'El email no es válido'
        },
        */
        match: [/^\S+@\S+\.\S+$/, 'El email no es válido'] // patron de busqueda para validar el email
    },
    enabled: {
        type: Boolean,
        default: true,
        select: false
    },
    rol : {
        type: String,
        required:true,
        trim: true,
        enum: ["ADMON","CLIENTE","DIRECTOR"]
    }
    
});


const Usuario = mongoose.model('usuario',usuarioSchema)

module.exports = Usuario;
   