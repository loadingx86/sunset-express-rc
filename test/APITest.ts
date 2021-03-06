import * as chai from "chai";
import chaiHttp = require("chai-http");

chai.use(chaiHttp);
const expect = chai.expect;

const request = require("request");

/**
 *  Testing API Calls
 */
describe('Sunset Route/Controller Test', function () {

    it("GET Request", (done) => {
        chai.request('http://localhost:3000')
            .get('/api/12345')
            .set('test-header', "my-header")
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.param1).to.be.equal("12345");
                done();
            });
    });

    it("POST Request", (done) => {
        chai.request('http://localhost:3000')
            .post('/api/12345')
            .set('test-header', "my-header")
            .send({ param2: "4321" })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.param1).to.be.equal("12345");
                expect(res.body.param2).to.be.equal("4321");
                done();
            });
    });

    it("PUT Request", (done) => {
        chai.request('http://localhost:3000')
            .put('/api/12345')
            .set('test-header', "my-header")
            .send({ param2: "4321" })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.param1).to.be.equal("12345");
                expect(res.body.param2).to.be.equal("4321");
                done();
            });
    });

    it("DELETE Request", (done) => {
        request({
            method: 'delete',
            url: 'http://localhost:3000/api/12345',
            headers: {
                "content-type": "application/json",
            },
            json: true
        }, function (error, response, body) {
            expect(response.statusCode).to.be.equal(200);
            expect(response.body).to.be.an('object');
            expect(response.body.param1).to.be.equal("12345");
            done();
        });
    });

    it("GET Decorated Request", (done) => {
        chai.request('http://localhost:3000')
            .get('/api/decorated/12345')
            .set('test-header', "my-header")
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.param1).to.be.equal("12345");
                done();
            });
    });

    it("POST Decorated Request", (done) => {
        chai.request('http://localhost:3000')
            .post('/api/decorated/12345')
            .set('test-header', "my-header")
            .send({ param2: "4321" })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.param1).to.be.equal("12345");
                expect(res.body.param2).to.be.equal("4321");
                done();
            });
    });

    it("PUT Decorated Request", (done) => {
        chai.request('http://localhost:3000')
            .put('/api/decorated/12345')
            .set('test-header', "my-header")
            .send({ param2: "4321" })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.param1).to.be.equal("12345");
                expect(res.body.param2).to.be.equal("4321");
                done();
            });
    });

    it("DELETE Decorated Request", (done) => {
        request({
            method: 'delete',
            url: 'http://localhost:3000/api/decorated/12345',
            headers: {
                "content-type": "application/json",
            },
            json: true
        }, function (error, response, body) {
            expect(response.statusCode).to.be.equal(200);
            expect(response.body).to.be.an('object');
            expect(response.body.param1).to.be.equal("12345");
            done();
        });
    });

});


