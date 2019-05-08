const jwt = require('jsonwebtoken');
const config = require('@app/config');

exports.process = async function(req, res) {
    try {
        const decoded = jwt.verify(req.body.token, config.secret);
        // console.log("Decoded payload:", decoded);

        const responses = ['declined', 'confirmed'];
        const response = responses[Math.floor(Math.random()*responses.length)];

        res.json({status: response});
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Order."
        });
    }
};
