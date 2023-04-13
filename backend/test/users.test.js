const chai = require('chai');
const chaiHTTP = require('chai-http');
const { Op } = require('sequelize');
const server = require('../app');
const models = require('../models/index.js');

chai.should();
chai.use(chaiHTTP);

describe('users', function () {

    beforeEach(function (done) {
        models.Data.create({
            firstName: 'Zikri',
            lastName: 'Habib',
            email: 'zikri@gmail.com'
        }).then(() => {
            done();
        });
    });

    afterEach(function (done) {
        models.Data.destroy({
            where: {
                email: {
                    [Op.or]: ['zikri@gmail.com']
                }
            }
        }).then(() => {
            done();
        });
    });

    it('Should list ALL users on /users GET', function (done) {
        chai.request(server)
            .get('/users')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                res.body.should.have.property('success');
                res.body.data[0].should.have.property('id');
                res.body.data[0].should.have.property('firstName');
                res.body.data[0].should.have.property('lastName');
                res.body.data[0].should.have.property('email');
                res.body.data[0].firstName.should.equal('Zikri');
                res.body.data[0].lastName.should.equal('Habib');
                res.body.data[0].email.should.equal('zikri@gmail.com');
                done();
            });
    });

    it('Should add SINGLE users on /users POST', function (done) {
        const user = {
            firstName: 'Taufik',
            lastName: 'Hidayat',
            email: 'taufik@gmail.com',
        };

        chai.request(server)
            .post('/users')
            .send({ ...user })
            .end(function (err, res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('data');
                res.body.should.have.property('success');
                res.body.data.should.have.property('id');
                res.body.data.should.have.property('firstName');
                res.body.data.should.have.property('lastName');
                res.body.data.should.have.property('email');
                res.body.data.firstName.should.equal('Taufik');
                res.body.data.lastName.should.equal('Hidayat');
                res.body.data.email.should.equal('taufik@gmail.com');
                done();
            });
    });

    it('Should update SINGLE users on /users/<id> PUT', function (done) {
        chai.request(server)
            .get('/users')
            .end(function (err, response) {
                chai.request(server)
                    .put(`/users/${response.body.data[0].id}`)
                    .send({ firstName: 'Taufik Hidayat', lastName: 'Sanjaya' })
                    .end(function (err, res) {
                        res.should.have.status(201);
                        res.should.be.json;
                        res.body.should.be.a('object');
                        res.body.should.have.property('data');
                        res.body.should.have.property('success');
                        res.body.data.should.have.property('id');
                        res.body.data.should.have.property('firstName');
                        res.body.data.should.have.property('lastName');
                        res.body.data.should.have.property('email');
                        res.body.data.firstName.should.equal('Taufik Hidayat');
                        res.body.data.lastName.should.equal('Sanjaya');
                        done();
                    });
            });
    });

    it('Should delete SINGLE users on /users/<id> DELETE', function (done) {
        chai.request(server)
            .get('/users')
            .end(function (err, res) {
                chai.request(server)
                    .delete(`/users/${res.body.data[0].id}`)
                    .end(function (error, response) {
                        response.should.have.status(200);
                        response.should.be.json;
                        response.body.should.be.a('object');
                        response.body.should.have.property('data');
                        response.body.should.have.property('success');
                        done();
                    });
            });

    });
});