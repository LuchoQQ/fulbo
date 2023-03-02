import Teams from "../models/Teams";

export const getAllTeams = async (req, res) => {
    try {
        const teams = await Teams.find()
        return res.status(200).json(teams);
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
};

export const getTeamByLider = async (req, res) => {
    try {
        const { userId } = req.body 
        const teams = Teams.find({ liderId: userId })
        return res.status(200).json(teams);
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
};

export const createTeam = async (req, res) => {
    const { liderId, jugadoresId } = req.body;
    try {
        const team = await Teams.create({
            liderId,
            jugadoresId
        });
        return res.status(201).json(team)
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
};

export const updateTeam = async (req, res) => {
    const { liderId, jugadoresId } = req.body;
    try {
        const team = await Teams.update({
            liderId,
            jugadoresId
        });
        return res.status(201).json(team)
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTeam = async (req, res) => {
    const { teamId } = req.body;
    try {
        const team = await Teams.findByIdAndDelete(teamId);
        return res.status(201).json(team)
    }
    catch {
        return res.status(500).json({ message: error.message });
    }
};