/*  binarie
    Created: 25 September 2024
    Purpose: Allows for a specific section to be linked to upon click
  */

const afterclick = "section-head afterclick";
const beforeclick = "section-head beforeclick";
const hashtag = "#";


function LinkTo(id)
{
    //get address and only take in the section before headers
    let b = window.location.href.split(hashtag)[0];

    //get string for the exact location and send that to clipboard and the console
    let retstr = b + hashtag + id;

    navigator.clipboard.writeText(retstr);

    console.log("Clipboard: " + retstr);

    //update
    document.getElementById(id).className = afterclick;
}
function setLinkAfterElement(id)
{
    if (document.getElementById(id).className == afterclick)
        document.getElementById(id).className = beforeclick;
}