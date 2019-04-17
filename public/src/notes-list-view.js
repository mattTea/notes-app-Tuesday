(function (exports) {

  function NotesListView (notesList) {
    this.notesList = notesList;
  };

  NotesListView.prototype.returnHtml = function () {
    var html = "<ul>";
    this.notesList.returnList().forEach(function(note){
      html += "<li>" + note.text.substr(0, 20) + "</li>"
    });
    return html + "</ul>"
  }

  NotesListView.prototype.returnNotesList = function() {
    return this.notesList
  }

  exports.NotesListView = NotesListView
}) (this);