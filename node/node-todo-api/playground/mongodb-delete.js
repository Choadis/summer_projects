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
  // .findOneAndDelete({name: 'Ayane'})
  // .then((res) => {
  //   console.log(res)
  // });

  // db
  // .collection('Users')
  // .deleteMany({name: 'Choadis'})
  // .then((res) => {
  //   console.log(`Deleted ${res.deletedCount} Users`)
  // });

  client.close();
});
