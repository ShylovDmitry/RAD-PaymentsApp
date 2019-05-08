const jwt = require('jsonwebtoken');
const config = require('@app/config');
const PaymentService = require('@services/payment');

exports.process = async function(req, res) {
    try {
        const decoded = jwt.verify(req.body.token, config.secret);

        const result = PaymentService.process(decoded);
        const status = (result) ? 'confirmed' : 'declined';

        res.json({status});
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Order."
        });
    }
};
