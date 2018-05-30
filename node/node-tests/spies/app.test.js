const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('app', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy', () => {
    var spy = expect.createSpy();

    spy('Choadis', 27);
    expect(spy)
    .toHaveBeenCalledWith('Choadis', 27);
  });

  it('should call save user w/ user object', () => {
    var email = 'choadis@example.com';
    var password = 'Choadis';

    app.handleSignup(email, password);

    expect(db.saveUser)
    .toHaveBeenCalledWith({email, password});
  });

})
