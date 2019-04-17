(function(exports){
  function NotesList () {
    this.listArray = [];
  };

  NotesList.prototype.add = function(text) {
    var note = new Note(text);
    this.listArray.push(note);
  };

  NotesList.prototype.returnList = function() {
    return this.listArray
  };

  exports.NotesList = NotesList;
})(this);
