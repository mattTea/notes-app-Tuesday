function testCreateNoteWithText(){
  var note = new Note('My favourite language is Javascript');

  assert.isTrue(note.text === "My favourite language is Javascript");
};

function testReturnTextContent(){
  var note = new Note('My favourite language is Javascript');

  assert.isTrue(note.print() === "My favourite language is Javascript");
};

testCreateNoteWithText();
testReturnTextContent();