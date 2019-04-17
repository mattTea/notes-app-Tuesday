function testCreateListArrayWithOneNote () {
  var list = new NotesList();
  list.add('Note 1');

  assert.isTrue(list.listArray[0].text === 'Note 1');
  
};

function testCreateListArrayWithTwoNotes () {
  var list = new NotesList();
  list.add('Buy Eggs');
  list.add('Bacon');

  assert.isTrue(list.listArray[0].text === 'Buy Eggs');
  assert.isTrue(list.listArray[1].text === 'Bacon'); 
};

function testReturnListContents () {
  var list = new NotesList();
  list.add('Buy Eggs');
  list.add('Bacon');
  testThis = list.returnList();
  assert.isTrue(testThis[0].text === 'Buy Eggs');
  assert.isTrue(testThis[1].text === 'Bacon');
}

function testReturnListContents () {
  var list = new NotesList();
  list.add('Buy Eggs');
  list.add('Bacon');
  testThis = list.returnList();
  assert.isTrue(testThis[0].text === 'Buy Eggs');
  assert.isTrue(testThis[1].text === 'Bacon');
}



testCreateListArrayWithOneNote();
testCreateListArrayWithTwoNotes();
testReturnListContents();