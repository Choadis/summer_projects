// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to database');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp')

  // db
  // .collection('Users')
  // .find({name: 'Choadis'})
  // .toArray()
  // .then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }), (err) => {
  //   console.log('Unable to fetch users', err);
  // };

  client.close();
});
