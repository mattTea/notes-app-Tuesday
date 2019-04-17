(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.listView = new ListView(this.noteList)
    this.html = this.listView.returnHtml()
  };

  NoteController.prototype.renderHtml = function(element = document.getElementById("app")) {
    return element.innerHTML = this.html;
  };
  
  var noteController = new NoteController(noteList = new NoteList)
  noteController.renderHtml()

  exports.NoteController = NoteController

})(this);