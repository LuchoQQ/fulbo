import Partidos from "../models/Partidos";

export const getAllPartidos = async (req, res) => {
    try {
        const partidos = await Partidos.find()
        return res.status(200).json(partidos);
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
}

export const createPartido = async (req, res) => {
    const { equipo1, equipo2, fecha, hora, lugar, resultado } = req.body;
    try {
        const partido = await Partidos.create({
            equipo1,
            equipo2,
            fecha,
            hora,
            lugar,
            resultado
        });
        return res.status(201).json(partido)
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
}

export const updatePartido = async (req, res) => {
    const { equipo1, equipo2, fecha, hora, lugar, resultado } = req.body;
    try {
        const partido = await Partidos.updateOne({
            equipo1,
            equipo2,
            fecha,
            hora,
            lugar,
            resultado
        });
        return res.status(201).json(partido)
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
}

export const deletePartido = async (req, res) => {
    const { partidoId } = req.body;
    try {
        const partido = await Partidos.findByIdAndDelete(partidoId);
        return res.status(201).json(partido)
    }
    catch {
        return res.status(500).json({ message: error.message });
    }  
}

export const getPartidoByEquipo = async (req, res) => {
    try {
        const { equipoId } = req.body 
        const partidos = Partidos.find({ equipo1: equipoId })
        const partidos2 = Partidos.find({ equipo2: equipoId })
        return res.status(200).json(partidos, partidos2);
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
}