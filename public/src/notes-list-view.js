(function (exports) {

  function ListView (notesList) {
    this.listModel = notesList;
  };

  ListView.prototype.returnHtml = function () {
    var html = "<ul>";
    this.listModel.returnList().forEach(function(note){
      html += "<li>" + note.text.substr(0, 20) + "</li>"
    });
    return html + "</ul>"
  }

  exports.ListView = ListView
}) (this);