function NotesListDouble() {
  this.listArray = [];
}
NotesListDouble.prototype = {
  add: function(text) {
    var id = this.listArray.length
    var note = new Note(text, id);
    this.listArray.push(note);
  }
}

function testCreateNoteWithText() {
  var notesList = new NotesListDouble;
  var note = new Note('My favourite language is Javascript', notesList.listArray.length);
  assert.isTrue(note.text === "My favourite language is Javascript");
};

function testReturnTextContent() {
  var notesList = new NotesListDouble;
  var note = new Note('My favourite language is Javascript', notesList.listArray.length);
  assert.isTrue(note.print() === "My favourite language is Javascript");
};

function testNoteHasIdProperty() {
  var notesList = new NotesListDouble;
  var note = new Note('Show my id', notesList.listArray.length);
  assert.isTrue(note.id !== undefined);
};

function testNoteCreatedWithId() {
  var notesList = new NotesListDouble;
  var note = new Note('Show my id', notesList.listArray.length);
  assert.isTrue(note.id === 0);
};

function testsMultipleNotesCreatedWithConsecutiveIds() {
  var notesList = new NotesListDouble;
  notesList.add('First note');
  notesList.add('Second note');
  assert.isTrue(notesList.listArray[0].id === 0);
  assert.isTrue(notesList.listArray[1].id === 1);
};

testCreateNoteWithText();
testReturnTextContent();
testNoteHasIdProperty();
testNoteCreatedWithId();
testsMultipleNotesCreatedWithConsecutiveIds()
