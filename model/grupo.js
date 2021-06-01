const mongoose = require("mongoose");

const Grupo = new mongoose.Schema({
    id: Number,
    name:{
        type: String,
        required: true
    },
    anyosActivos: String,
    miembros: String,
    descripcion: String,
    video: String
});

module.exports = mongoose.model("Grupo", Grupo);