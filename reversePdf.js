// Created by Nathaniel Young (nyoungstudios on GitHub)
// this script creates a new pdf by reversing the currently focused pdf

// anonymous wrapper function
(function() {

  // gets the current document object
  var currDoc = this;

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

})();