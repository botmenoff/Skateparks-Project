// Iniciar el sequalize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('skateparks_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
const User = require('../models/user')(sequelize, Sequelize);

// GETALL
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['userName', 'email', 'admin', 'createdAt', 'updatedAt'],
        });
        res.json(users);
        console.log(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GETBYID
const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: ['userName', 'email', 'admin', 'createdAt', 'updatedAt'],
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Exportar los métodos del controlador
module.exports = {
    getAllUsers,
    getUserById,
};
