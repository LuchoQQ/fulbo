import Jugadores from "../models/Jugadores";

export const getAllJugadores = async (req, res) => {
    try {
        const jugadores = await Jugadores.find()
        return res.status(200).json(jugadores);
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
}

export const createJugador = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const jugador = await Jugadores.create({
            nombre,
            descripcion
        });
        return res.status(201).json(jugador)
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
}

export const updateJugador = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const jugador = await Jugadores.updateOne({
            nombre,
            descripcion
        });
        return res.status(201).json(jugador)
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteJugador = async (req, res) => {
    const { jugadorId } = req.body;
    try {
        const jugador = await Jugadores.findByIdAndDelete(jugadorId);
        return res.status(201).json(jugador)
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
}
