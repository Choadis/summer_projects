const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

  describe('#get /', () => {

    it('Should return the string', (done) => {
      request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.body)
        .toInclude({
          error: 'Not found my dude'
        })
      })
      .end(done);
    });

  });

  describe('#get /users', () => {

    it('should list users', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body)
        .toInclude({
          name: 'Choadis',
          age: 27
        });
      })
      .end(done);
    });

  });

});
