const mongoose = require("mongoose");

const jugadorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
    }
})

export default mongoose.models.Jugador || mongoose.model("Jugador", jugadorSchema);