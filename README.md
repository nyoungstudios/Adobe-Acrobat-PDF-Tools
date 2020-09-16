# Adobe Acrobat PDF Tools
I graduated from college and decided to digitize some of my school work instead of saving a hard copy. Unfortunately, my scanner can only scan one side at a time; therefore, merging the even and odd pages would be a highly time consuming and manual process. So I wrote these scripts to do it for me. 

The "Merge Two PDFs by alternating Odd and Reverse Even Pages" is probably the most relevent script if you are scanning a book, journal, magazine, etc. since the even page numbers typically are scanned in backwards.

## Features
* Merge Two PDFs by alternating Odd and Even Pages
* Merge Two PDFs by alternating Odd and Reverse Even Pages
* Reverse Page Order of all Open PDFs
* Reverse Page Order of Currently Focused (or selected) PDF
* Create new PDF for each page of Currently Focused PDF

## How to install?
1. Download the XmlData.zip of the [latest release](https://github.com/nyoungstudios/Adobe-Acrobat-PDF-Tools/releases), and unzip the folder.
2. Open Adobe Acrobat, and open the Action Wizard tool.
3. Then, click the "Manage Custom Commands" tab.
4. On the new popup window, click import and select the XML Documents you want to install.

## How to use?
If you are using either of the merge PDF scripts, make sure to close all PDF documents. Then, open the odd document first. And then the even document afterwards. The order is important so the script knows which document to put as the odd and even document. In the future, I hope to make it a little more user friendly like Adobe's built in Combine Files tool.

As for the Reverse Page Order scripts, they do not have any restrictions.

## Notes
Tested on Adobe Acrobat Pro DC (as part of the Adobe Creative Cloud).\
For the merge PDF scripts if the pages are different lengths, then it will just append the rest of the pages without alternating at the end.\
All scripts create a new document rather than modifying the original documents.
