const fs = require('fs');
const notes = require('./notes.js');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e){
    return [];
  };
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

// ADD
var add = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var dupeNotes = notes.filter((note) => note.title === title);

  if (dupeNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

// LIST
var list = () => {
  return fetchNotes();
};

// READ
var read = (title) => {
  var notes = fetchNotes();
  var noteFilter = notes.filter((note) => note.title === title);
  return noteFilter[0];
};

// REMOVE
var remove = (title) => {
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title !== title);
  saveNotes(filterNotes);

  return notes.length !== filterNotes.length;
};

var logNote = (note) => {
  console.log('-------------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  add,
  list,
  read,
  remove,
  logNote
};
