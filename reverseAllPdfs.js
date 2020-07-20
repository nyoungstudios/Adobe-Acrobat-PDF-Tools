// Created by Nathaniel Young (nyoungstudios on GitHub)
// this script creates new pdfs by reversing all the open pdfs

// anonymous wrapper function
(function() {

  // gets the active documents with the first one being the odd and second one being the even document
  var activeDocs = app.activeDocs;

  // reverse the pages for all the documents that are open
  for (var i = 0; i < activeDocs.length; i++) {
    // gets the current document object
    var currDoc = activeDocs[i];

    // gets the page length of the documents
    var lenCurrDoc = currDoc.numPages;

    // Create new PDF document
    var newDoc = app.newDoc();

    // for the length of the document, insert page into new document
    for (var j = 0; j < lenCurrDoc; j ++) {
      newDoc.insertPages({
        nPage: j,
        cPath: currDoc.path,
        nStart: lenCurrDoc - j - 1,
        nEnd: lenCurrDoc - j - 1
      });
    }

    // deletes initial blank page
    newDoc.deletePages();

  }

})();