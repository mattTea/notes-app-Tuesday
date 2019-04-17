function testsSingleNoteViewOutputsHtmlString() {
  var note = new Note("single note")
  var singleNote = new SingleNoteView(note)
  assert.isTrue(singleNote.returnHtmlString() === "<div>single note</div>")
}

testsSingleNoteViewOutputsHtmlString()