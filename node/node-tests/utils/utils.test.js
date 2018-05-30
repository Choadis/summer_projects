const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {

    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res)
      .toBe(44)
      .toBeA('number');
    });

    it('should async add 2 numbers', (done) => {
      utils.asyncAdd(4, 3, (res) => {
        expect(res)
        .toBe(7)
        .toBeA('number');
        done();
      });
    });

  });

  describe('#square', () => {

    it('should square a number', () => {
      var res = utils.square(4);

      expect(res)
      .toBe(16)
      .toBeA('number');
    });

    it('should async square a number', (done) => {
      utils.asyncSquare(5, (res) => {
        expect(res)
        .toBe(25)
        .toBeA('number');
        done();
      });
    });

  });

  // it('should be a test', () => {
  //   // expect(12)
  //   // .toNotBe(11);
  //
  //   // expect({name: 'Choadis'})
  //   // .toEqual({name: 'Choadis'});
  //
  //   expect({
  //     name: 'Choadis', age: 27, location: 'Waffle'
  //   })
  //   .toInclude({
  //     age: 27
  //   });
  // })

  // it('should verify first and last names are set', () => {
  //   var user = {location: 'Waffle'}
  //   var res = utils.setName(user, 'Choadis Maximus');
  //
  //   expect(user)
  //   .toInclude({
  //     firstName: 'Choadis',
  //     lastName: 'Maximus'
  //   });
  // });

});
