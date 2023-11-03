const express = require('express');
const router = express.Router();
// import the controller functions
const UserController = require('../controllers/Users.controllers');

// GetAll users route
router.get('/getAll', UserController.getAllUsers);

module.exports = router;
