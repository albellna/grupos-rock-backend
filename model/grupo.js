const mongoose = require("mongoose");

const Grupo = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    anyosActivos: String,
    miembros: String,
    descripcion: String
});

module.exports = mongoose.model("Grupo", Grupo);