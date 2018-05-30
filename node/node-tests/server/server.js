const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send({
    error: 'Not found my dude',
    name: 'Server thingy'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Choadis',
    age: 27
  }, {
    name: 'Para',
    age: 12
  }, {
    name: 'Ayane',
    age: 25
  }]);
});

app.listen(3000);

module.exports.app = app;
