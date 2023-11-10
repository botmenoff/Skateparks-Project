const express = require('express');
const router = express.Router();
// import the controller functions
const UserController = require('../controllers/Users.controllers');
// import the middlewares
const UsersMiddlewares = require('../middlewares/Users.middlewares');

// USERS
router.get('/get', UserController.getAllUsers);
router.get('/get/:id', UserController.getUserById);
router.post('/create', UsersMiddlewares.verifyUserData,UsersMiddlewares.verifyEmail , UserController.createUser);

module.exports = router;
