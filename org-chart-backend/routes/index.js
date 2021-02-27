const express = require('express');
const router = express.Router();

const chart = require('./chart');

/* Application Routes */
router.use('/chart', chart);

module.exports = router;
