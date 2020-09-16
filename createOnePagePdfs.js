// Created by Nathaniel Young (nyoungstudios on GitHub)
// this script creates a new one page pdf document for each pdf page in the current focused pdf

// anonymous wrapper function
(function() {

  // gets the current document object
  var currDoc = this;

  // gets the page length of the documents
  var lenCurrDoc = currDoc.numPages;

  // for the length of the document, insert page into new document
  for (var j = 0; j < lenCurrDoc; j ++) {
    // Create new PDF document
    var newDoc = app.newDoc();
    newDoc.insertPages({
      nPage: 0,
      cPath: currDoc.path,
      nStart: j,
      nEnd: j
    });
    
    // deletes initial blank page
    newDoc.deletePages();
  }

})();