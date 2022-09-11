const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

// getBMI API Endpoint
router.get('/getBMI', controller.calculateBMI);

module.exports = router;