const expect = require('chai').expect;
const chai = require('chai');
const server = require('@app/server');
const jwt = require('jsonwebtoken');
const config = require('@app/config');

describe('Payment API', function() {

    describe('POST /api/payment/process', function() {

        it('should process a payment', async function() {
            const data = {
                title: "Order",
                amount: 240
            };
            const token = jwt.sign(data, config.secret);

            const res = await chai.request(server)
                .post('/api/payment/process')
                .send({token});

            expect(res).to.have.status(200);
            expect(res.body.status).to.be.oneOf(['declined', 'confirmed']);
        });

    });

});
