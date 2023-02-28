const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    liderId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true,
    },
    jugadoresId: {
        type: Array,
        required: true,
    }
})

export default mongoose.models.Team || mongoose.model("Team", teamSchema);

