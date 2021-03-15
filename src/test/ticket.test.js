const expect = require('chai').expect,
database = require('../database'),
chaihttp = require('chai-http'),
chai = require('chai'),
app = require('../server'),
assert = require('chai').assert,
should = chai.should();

chai.use(chaihttp);
describe('ticket backend test', () => {
    describe('get ticket method', function(){
        this.timeout(10000);
        it.only('should get ticket data when a valid ticketid is passed', async() => {
            const res = await chai.request('http://localhost:8085')
            .get('/ticket/get')
            .set('Content-Type', 'application/json')
            assert.equal(res.status, 200);
        });
        });
    describe('create ticket method', function(){
        this.timeout(10000);
        it.only('should create ticket when a valid request body is passed', async() => {
            req = {
                creation: "05-04-2021 09:00:00",
            customer: "dheeraj5",
            performance :"dheerajmovie5",
            performancetime: "05-04-2021 12:00:00",
            ticket:150
            };
            const res = await chai.request('http://localhost:8085')
            .post('/ticket/create')
            .set('Content-Type', 'application/json')
            .send(req);
            assert.equal(res.status, 200);
        });
        });
    describe('update ticket method', function(){
        this.timeout(10000);
        it.only('should update ticket data when a valid ticketid and data is passed', async() => {
            req = {
                performance:"movie4",
                performancetime:"04-03-2021 02:00:00",
                ticketid:2
            }
            const res = await chai.request('http://localhost:8085')
            .put('/ticket/update')
            .set('Content-Type', 'application/json')
            .send(req);
            assert.equal(res.status, 200);
        });
        });
    describe('delete ticket method', function(){
        this.timeout(10000);
        it.only('should delete ticket data when a valid ticketid is passed', async() => {
            req = {
                ticketid:3
            };
            const res = await chai.request('http://localhost:8085')
            .delete('/ticket/delete')
            .set('Content-Type', 'application/json')
            .send(req);
            assert.equal(res.status, 200);
        });
        });
});