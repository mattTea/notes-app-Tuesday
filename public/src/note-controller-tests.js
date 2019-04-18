function NoteDouble(text) {
  this.text = text
};
var note = new NoteDouble("test note")

function NotesListDouble() {};
NotesListDouble.prototype = {
  returnList: function() { return [note]}
};
var notesList = new NotesListDouble;

function testThingIsNoteControllerObject() {
  var noteController = new NoteController(notesList);
  assert.isTrue(noteController instanceof NoteController);
};
testThingIsNoteControllerObject();

function testControllerRendersNotesList() {
  function elementDouble() {
    this.innerHtml = ""
  }
 
  var noteController = new NoteController(notesList)
  var newHtml = noteController.renderHtml(elementDouble)
  assert.isTrue(newHtml === "<ul><li>test note</li></ul>")
};
testControllerRendersNotesList();
