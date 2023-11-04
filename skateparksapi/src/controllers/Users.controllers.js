// Iniciar el sequalize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('skateparks_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
const User = require('../models/user')(sequelize, Sequelize);

// Importar el service
const Services = require('../services/Services.js');

// GETALL
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['userName', 'email', 'admin', 'createdAt', 'updatedAt'],
        });
        res.status(200).json(users);
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
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE
const createUser = async (req, res) => {
    try {
        // Check if admin field exists
        console.log(req.body.admin);
        if (req.body.admin != undefined) {
            res.status(400).json({ 'Bad request': 'No admin field' });
        } else {
            // Hash the password
            req.body.password = await Services.hashPassword(req.body.password)
            const user = await User.create(req.body, {
                attributes: ['userName', 'email', 'admin', 'createdAt', 'updatedAt'],
            });
            res.status(201).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Exportar los métodos del controlador
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
};
