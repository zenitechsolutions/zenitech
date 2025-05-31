const express = require('express');
const { handleDemoForm } = require('../controllers/demoController.js');

const router = express.Router();

router.post('/', handleDemoForm);

module.exports = router;
