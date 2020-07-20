# Adobe Acrobat PDF Tools
I graduated from college and decided to digitize some of my school work instead of saving a hard copy. Unfortunately, my scanner can only scan onside at a time; therefore, merging the even and odd pages would be a highly time consuming and manual process. So I wrote these scripts to do it for me. These scripts are meant to be used with Adobe Acrobat and can be installed using the Action Wizard tool by clicking the "New Custom Command" tab.

## Features
* Merge Two PDFs by alternating Odd and Even Pages
* Merge Two PDFs by alternating Odd and Reverse Even Pages
* Reverse Page Order of all Open PDFs
* Reverse Page Order Currently Focused (or selected) PDF

## How to use?
If you are using either of the merge PDF scripts, make sure to close all PDF documents. Then, open the odd document. And then the even document afterwards. The order is important so the script knows which document to put as the odd and even document. In the future, I hope to make it a little more user friendly like Adobe's built in Combine Files tool.

As for the Reverse Page Order scripts, they do not have any restrictions.

## Notes
Tested on Adobe Acrobat Pro DC (as part of the Adobe Creative Cloud)\
For the merge PDF scripts if the pages are different lengths, then it will just append the rest of the pages without alternating at the end.\
All scripts create a new document rather than modifying the original documents.
