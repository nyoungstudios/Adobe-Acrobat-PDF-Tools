// Created by Nathaniel Young (nyoungstudios on GitHub)
// this script creates a new two page pdf document for each two pdf pages in the current focused pdf
// if there is an odd number of pages, then it puts the left over page in a new document

// anonymous wrapper function
(function() {

  // gets the current document object
  var currDoc = this;

  // gets the page length of the documents
  var lenCurrDoc = currDoc.numPages;

  // for the length of the document, insert page into new document
  for (var j = 0; j < lenCurrDoc; j +=2) {
    
    // Create new PDF document
    var newDoc = app.newDoc();
    newDoc.insertPages({
      nPage: 0,
      cPath: currDoc.path,
      nStart: j,
      nEnd: j < lenCurrDoc - 1? j + 1 : j
    });

    // deletes initial blank page
    newDoc.deletePages();

  }

})();