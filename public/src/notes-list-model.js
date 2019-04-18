(function(exports){
  function NotesList() {
    this.listArray = [];
  };

  NotesList.prototype.add = function(text) {
    var id = this.listArray.length
    var note = new Note(text, id);
    this.listArray.push(note);
  };

  NotesList.prototype.returnList = function() {
    return this.listArray
  };

  exports.NotesList = NotesList;
})(this);
