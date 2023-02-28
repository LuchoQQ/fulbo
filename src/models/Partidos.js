const mongoose = require("mongoose");

const partidoSchema = new mongoose.Schema({
    fechaCreacion: {
        type: Date,
        required: true,
    },
    fechaConcretada: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
        
    },
    equipo1: {
        type: mongoose.Schema.Types.ObjectId, ref: "Team",
        required: true,
    },
    equipo2: {
        type: mongoose.Schema.Types.ObjectId, ref: "Team",
        required: true,
    },

})

export default mongoose.models.Partido || mongoose.model("Partido", partidoSchema);