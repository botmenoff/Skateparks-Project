const express = require('express');
const router = express.Router();
// import the controller functions
const UserController = require('../controllers/Users.controllers');

// USERS
router.get('/get', UserController.getAllUsers);
router.get('/get/:id', UserController.getUserById);

module.exports = router;
