// double NotesList in this test file

function testViewModelInstantiation () {
  function NotesListDouble() {
    this.listArray = []
  }
  NotesListDouble.prototype = {
    add: function(text) {
      this.listArray.push(text)
    },
    returnList: function() {
      return this.listArray
    }
  }
  
  // double added above, now use it in the test below
  var notesList = new NotesList();
  notesList.add('Buy Eggs');
  notesList.add('Bacon');
  var notesListView = new NotesListView(notesList);
  assert.isTrue(notesListView.returnNotesList().listArray[0].text === 'Buy Eggs');
}

function testViewModelReturnsHtmlForANote () {
  var notesList = new NotesList();
  notesList.add('Buy Eggs');
  var notesListView = new NotesListView(notesList);
  assert.isTrue(notesListView.returnHtml() === "<ul><li>Buy Eggs</li></ul>");
}

function testViewModelReturnsHtmlForSeveralNotes () {
  var notesList = new NotesList();
  notesList.add('Buy Eggs');
  notesList.add('Bacon');
  var notesListView = new NotesListView(notesList);
  assert.isTrue(notesListView.returnHtml() === "<ul><li>Buy Eggs</li><li>Bacon</li></ul>");
}

function testViewModelReturnsHtmlNoNotes () {
  var notesList = new NotesList();
  var notesListView = new NotesListView(notesList);
  assert.isTrue(notesListView.returnHtml() === "<ul></ul>");
}

function testsNotesOnlyShowFirst20Chars() {
  var notesList = new NotesList
  notesList.add("Concatenate to twenty characters only")
  var notesListView = new NotesListView(notesList)
  assert.isTrue(notesListView.returnHtml() === "<ul><li>Concatenate to twent</li></ul>")
}


testViewModelInstantiation();
testViewModelReturnsHtmlForANote();
testViewModelReturnsHtmlForSeveralNotes();
testViewModelReturnsHtmlNoNotes();
testsNotesOnlyShowFirst20Chars()