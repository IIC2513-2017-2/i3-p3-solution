const http = require('http');
const supertest = require('supertest');
const app = require('../src/app');

const server = http.createServer(app.callback());

describe('Server', () => {
  test('should return ok', done => {
    supertest(server)
      .get('/')
      .expect(200, done);
  });
});

describe('Middleware', () => {
  test('should decorate response', done => {
    supertest(server)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) throw err;
        const body = res.body;
        expect(body).toBeInstanceOf(Object);
        expect(body).toHaveProperty('data');
        expect(body).toHaveProperty('metadata');
        expect(body).toHaveProperty('metadata.timeSpent');
        expect(body).toHaveProperty('metadata.requestId');
        done();
      });
  });
});
