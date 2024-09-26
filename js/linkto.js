/*  binarie
    Created: 25 September 2024
    Purpose: Allows for a specific section to be linked to upon click
  */

const afterclick = "section-head afterclick";
const beforeclick = "section-head beforeclick";
const hashtag = "#";
function LinkTo(id)
{
    //get string literal
    let str = String(id);

    //get address and only take in the section before headers
    let b = window.location.href.split(hashtag)[0];

    //get string for the exact location and send that to clipboard and the console
    let retstr = b + hashtag + str;

    navigator.clipboard.writeText(retstr);

    console.log("Clipboard: " + retstr);

    //update the 
    document.getElementById(str).className = afterclick;
}

//this function is called after the tooltip is faded.
function SetLinkFadeout(id)
{
    setTimeout(setLinkAfterElement, 200, id);
}


function setLinkAfterElement(id)
{
    document.getElementById(id).className = beforeclick;
}