const fs = require('fs');

// var obj = {
//   name: 'Choadis'
// };
//
// var stringObj = JSON.stringify(obj)
//
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Choadis", "age": 27}';
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

// VAR
var original = {
  title: "some title",
  body: "the body"
};
var originalString = JSON.stringify(original);
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

// CODE

fs.writeFileSync('notes.json', originalString);

console.log(typeof note);
console.log(note.title);
