// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to database');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp')

  db
  .collection('Users')
  .findOneAndUpdate({
    __id : new ObjectID('5b0e69911e227e173b5e3264')
  }, {
    $set: {
      name: 'Choadis'
    },
    $inc: {
      age: 16
    }
  }, {
    returnOriginal: false
  })
  .then((res) => {
    console.log(res)
  });

  client.close();
});
