function testViewModelInstantiation () {
  var noteslist = new NoteList();
  noteslist.add('Buy Eggs');
  noteslist.add('Bacon');

  var listView = new ListView(noteslist);

  assert.isTrue(listView.listModel.listArray[0].text === 'Buy Eggs');
}

function testViewModelReturnsHtmlForANote () {
  var noteslist = new NoteList();
  noteslist.add('Buy Eggs');

  var listView = new ListView(noteslist);

  assert.isTrue(listView.returnHtml() === "<ul><li>Buy Eggs</li></ul>");
}

function testViewModelReturnsHtmlForSeveralNotes () {
  var noteslist = new NoteList();
  noteslist.add('Buy Eggs');
  noteslist.add('Bacon');

  var listView = new ListView(noteslist);

  assert.isTrue(listView.returnHtml() === "<ul><li>Buy Eggs</li><li>Bacon</li></ul>");
}

function testViewModelReturnsHtmlNoNotes () {
  var noteslist = new NoteList();

  var listView = new ListView(noteslist);

  assert.isTrue(listView.returnHtml() === "<ul></ul>");
}

function testsNotesOnlyShowFirst20Chars() {
  var noteslist = new NoteList
  noteslist.add("Concatenate to twenty characters only")
  var listView = new ListView(noteslist)
  assert.isTrue(listView.returnHtml() === "<ul><li>Concatenate to twent</li></ul>")
}


testViewModelInstantiation();
testViewModelReturnsHtmlForANote();
testViewModelReturnsHtmlForSeveralNotes();
testViewModelReturnsHtmlNoNotes();
testsNotesOnlyShowFirst20Chars()