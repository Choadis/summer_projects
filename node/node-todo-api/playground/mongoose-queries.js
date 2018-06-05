const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b14e8999356932c2e02cdb9';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not found');
// }

// Todo
// .find({
//   _id: id
// }).then((todos) => {
//   if (!todos) {
//     return console.log('ID not found');
//   }
//   console.log('Todos', todos);
// });
//
// Todo
// .findOne({
//   completed: false
// }).then((todo) => {
//   console.log('Todo find one', todo);
// });

User
.findById('5b14e8999356932c2e02cdb9')
.then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2))
}).catch((e) => console.log(e));
