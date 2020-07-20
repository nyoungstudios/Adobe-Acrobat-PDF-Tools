// Created by Nathaniel Young (nyoungstudios on GitHub)
// this script creates a new pdf by merging the even and odd pages
// in other words, creates new pdf by inserting alternating pages from each source
// must open the odd pages pdf before the even pages pdf

// anonymous wrapper function
(function() {

  // gets the active documents with the first one being the odd and second one being the even document
  var activeDocs = app.activeDocs;
  if (activeDocs.length < 2) {
    app.alert('Need to open two PDFs.');
    return;
  }
  
  var oddDoc = activeDocs[0];
  var evenDoc = activeDocs[1];

  // gets the page length of the documents
  var lenOddDoc = oddDoc.numPages;
  var lenEvenDoc = evenDoc.numPages;

  // Create new PDF document
  var newDoc = app.newDoc();

  // index counters
  index = 0;
  oddIndex = 0;
  evenIndex = 0;

  // inserts the pages alternating from each pdf source
  while (oddIndex != lenOddDoc && evenIndex != lenEvenDoc) {
    if (index % 2 == 0) {
      newDoc.insertPages({
        nPage: index,
        cPath: oddDoc.path,
        nStart: oddIndex,
        nEnd: oddIndex
      });
      oddIndex++;
    } else {
      newDoc.insertPages({
        nPage: index,
        cPath: evenDoc.path,
        nStart: evenIndex,
        nEnd: evenIndex
      });
      evenIndex++;

    }

    //    console.println('index: ' + index + ' odd: ' +  oddIndex + ' even: ' + evenIndex);

    index++;

  }

  // appends the leftover pages if pdf lengths are not equal
  if (oddIndex != lenOddDoc) {
    newDoc.insertPages({
      nPage: index,
      cPath: oddDoc.path,
      nStart: oddIndex,
      nEnd: lenOddDoc - 1
    });
  } else if (evenIndex != lenEvenDoc) {
    newDoc.insertPages({
      nPage: index,
      cPath: evenDoc.path,
      nStart: evenIndex,
      nEnd: lenEvenDoc - 1
    });
  }

  // deletes initial blank page
  newDoc.deletePages();

})();