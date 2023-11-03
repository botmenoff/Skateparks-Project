// Iniciar el sequalize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('skateparks_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
const User = require('../models/user')(sequelize, Sequelize);


const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers,
};
