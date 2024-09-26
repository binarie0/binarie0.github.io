function LinkTo(id)
{
    let str = String(id);

    let b = window.location.href.split("#")[0];

    let retstr = b + "#" + str;

    navigator.clipboard.writeText(retstr);

    console.log("Clipboard: " + retstr);

    document.getElementById(str).className="section-head afterclick";
}
function SetLinkFadeout(id)
{
    setTimeout(setLinkAfterElement, 200, id);
}
function setLinkAfterElement(id)
{
    document.getElementById(id).className="section-head beforeclick";
}