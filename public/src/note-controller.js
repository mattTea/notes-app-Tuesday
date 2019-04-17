(function(exports) {
  function NoteController(notesList) {
    this.notesList = notesList
    this.notesListView = new NotesListView(this.notesList)
    this.html = this.notesListView.returnHtml()
  };

  NoteController.prototype.renderHtml = function(element = document.getElementById("app")) {
    return element.innerHTML = this.html;
  };
  
  var noteController = new NoteController(notesList = new NotesList)
  noteController.renderHtml()

  exports.NoteController = NoteController

})(this);