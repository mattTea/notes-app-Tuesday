(function(exports) {
  function SingleNoteView(note) {
    this.note = note
    }

    SingleNoteView.prototype.returnHtmlString = function() {
      return "<div>" + this.note.print() + "</div>"
    }
    
  exports.SingleNoteView = SingleNoteView
})(this)

