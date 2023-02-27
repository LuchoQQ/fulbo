import User from "../models/User";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({
            username,
            email,
            password,
            avatar: 'https://res.cloudinary.com/diylksocz/image/upload/v1658451055/378a270e775265622393da8c0527417e_phnp4l.jpg'
        });
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
