const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    liderId: {
        type: String,
        required: true,
        trim: true,
    },
    jugadoresId: {
        type: Array,
        required: true,
    }
})

export default mongoose.models.Team || mongoose.model("Team", teamSchema);

