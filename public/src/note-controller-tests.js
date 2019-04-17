function testThingIsNoteControllerObject() {
  var noteList = new NoteList
  var noteController = new NoteController(noteList)
  assert.isTrue(noteController instanceof NoteController)
};
testThingIsNoteControllerObject();

function testControllerRendersNotesList() {
  
  function NoteDouble(text) {
    this.text = text
  };
  var note = new NoteDouble("test note")

  function NoteListDouble() {};
  NoteListDouble.prototype = {
    // add: function(notetext) {},
    returnList: function() { return [note]}
  }
 
  function element() {
    this.innerHtml = ""
  }
 
  var noteList = new NoteListDouble
  // noteList.add(note.text)

  var noteController = new NoteController(noteList)
  var newHtml = noteController.renderHtml(element)
  assert.isTrue(newHtml === "<ul><li>test note</li></ul>")
};
testControllerRendersNotesList();
