function NoteDouble(text) {
  this.text = text
}

var note1 = new NoteDouble('Buy Eggs')
var note2 = new NoteDouble('Bacon')

function testCreateListArrayWithOneNote () {
  var list = new NotesList
  list.add(note1.text);
  assert.isTrue(list.listArray[0].text === 'Buy Eggs');
};

function testCreateListArrayWithTwoNotes () {
  var list = new NotesList
  list.add(note1.text);
  list.add(note2.text);
  assert.isTrue(list.listArray[0].text === 'Buy Eggs');
  assert.isTrue(list.listArray[1].text === 'Bacon'); 
};

function testReturnListContents () {
  var list = new NotesList
  list.add(note1.text);
  list.add(note2.text);
  testThis = list.returnList();
  assert.isTrue(testThis[0].text === 'Buy Eggs');
  assert.isTrue(testThis[1].text === 'Bacon');
}

testCreateListArrayWithOneNote();
testCreateListArrayWithTwoNotes();
testReturnListContents();