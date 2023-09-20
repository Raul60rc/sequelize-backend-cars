const db = require('../api/users/userModel');

// model
const User = db.User;

// functions

// 1. Create User
const createUser = async (req, res) => {
    try {
        const userData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            // You can add more fields like name, date of birth, etc. here
        };

        const user = await User.create(userData);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// 2. Get All Users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({});
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createUser,
    getAllUsers
};
