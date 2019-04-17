function testThingIsNoteControllerObject() {
  var noteList = new NotesList
  var noteController = new NoteController(noteList)
  assert.isTrue(noteController instanceof NoteController)
};
testThingIsNoteControllerObject();

function testControllerRendersNotesList() {
  
  function NoteDouble(text) {
    this.text = text
  };
  var note = new NoteDouble("test note")

  function NotesListDouble() {};
  NotesListDouble.prototype = {
    returnList: function() { return [note]}
  }
 
  function element() {
    this.innerHtml = ""
  }
 
  var notesList = new NotesListDouble

  var noteController = new NoteController(notesList)
  var newHtml = noteController.renderHtml(element)
  assert.isTrue(newHtml === "<ul><li>test note</li></ul>")
};
testControllerRendersNotesList();
