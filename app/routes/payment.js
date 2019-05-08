const express = require('express');
const router = express.Router();
const paymentController = require('@controllers/payment');

router.post('/process', paymentController.process);

module.exports = router;
