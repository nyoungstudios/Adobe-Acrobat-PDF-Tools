// Created by Nathaniel Young (nyoungstudios on GitHub)
// this script closes all PDF documents without asking the user if they want to save it

// anonymous wrapper function
(function() {

  // gets the active documents with the first one being the odd and second one being the even document
  var activeDocs = app.activeDocs;

  // loops over all documents that are open
  for (var i = 0; i < activeDocs.length; i++) {
    // gets the current document object
    var currDoc = activeDocs[i];
    
    // closes document without save notification
    currDoc.closeDoc(true);
    
  }

})();