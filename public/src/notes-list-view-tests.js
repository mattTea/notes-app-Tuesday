function NoteDouble(text) {
  this.text = text
}

function NotesListDouble() {
  this.listArray = []
}
NotesListDouble.prototype = {
  add: function(note) {
    this.listArray.push(note)
  },
  returnList: function() {
    return this.listArray
  }
}

var note1 = new NoteDouble('Buy Eggs');
var note2 = new NoteDouble('Bacon');
var notesList = new NotesListDouble;

function testViewModelInstantiation () {
  notesList.add(note1);
  notesList.add(note2);
  var notesListView = new NotesListView(notesList);
  assert.isTrue(notesListView.returnNotesList().listArray[0].text === 'Buy Eggs');
}

function testViewModelReturnsHtmlForANote () {
  var notesList = new NotesListDouble;
  notesList.add(note1);
  var notesListView = new NotesListView(notesList);
  assert.isTrue(notesListView.returnHtml() === "<ul><li>Buy Eggs</li></ul>");
}

function testViewModelReturnsHtmlForSeveralNotes () {
  var notesList = new NotesListDouble;
  notesList.add(note1);
  notesList.add(note2);
  var notesListView = new NotesListView(notesList);
  assert.isTrue(notesListView.returnHtml() === "<ul><li>Buy Eggs</li><li>Bacon</li></ul>");
}

function testViewModelReturnsHtmlNoNotes () {
  var notesList = new NotesListDouble;
  var notesListView = new NotesListView(notesList);
  assert.isTrue(notesListView.returnHtml() === "<ul></ul>");
}

function testsNotesOnlyShowFirst20Chars() {
  var notesList = new NotesListDouble;
  note3 = new NoteDouble("Concatenate to twenty characters only");
  notesList.add(note3);
  var notesListView = new NotesListView(notesList);
  assert.isTrue(notesListView.returnHtml() === "<ul><li>Concatenate to twent</li></ul>");
}


testViewModelInstantiation();
testViewModelReturnsHtmlForANote();
testViewModelReturnsHtmlForSeveralNotes();
testViewModelReturnsHtmlNoNotes();
testsNotesOnlyShowFirst20Chars()