var express = require('express');
var router = express.Router();
var paymentController = require('@controllers/payment');

router.post('/process', paymentController.process);

module.exports = router;
