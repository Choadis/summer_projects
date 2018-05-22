// CONSTS

const fs = require('fs');

const _ = require('lodash');

const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Content of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add', 'Adds new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read note', {
  title: titleOptions
})
.command('remove', 'Deletes a note', {
  title: titleOptions
})
.help()
.argv;

const notes = require('./notes.js');

// VARS

var command = argv._[0];

// CODE


if (command === 'add'){

  var note = notes.add(argv.title, argv.body)

  if (note) {
    console.log('Added note');
    notes.logNote(note);
  } else {
    console.log('Note already exists');
  }

} else if (command === 'list') {

  var allNotes = notes.list();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {

  var note = notes.read(argv.title);

  if (note) {
    console.log('Reading note');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }

} else if (command === 'remove') {

  var noteRemove = notes.remove(argv.title);
  var message = noteRemove ? `Note ${argv.title} was removed` : 'Note not found';
  console.log(message);

} else {
  console.log('Command not recognized');
};
