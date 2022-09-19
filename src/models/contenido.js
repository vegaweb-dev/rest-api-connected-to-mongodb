const mongoose = require('mongoose');

 const contenidoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    }

 })

 module.exports = mongoose.model('Contenido',contenidoSchema);