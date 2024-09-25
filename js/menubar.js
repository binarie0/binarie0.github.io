class Menubar
{
    static interval = null;
}
function animateLogoText(isMouseOver)
{
    
    let logoelement = document.getElementById('logo');

    clearInterval(Menubar.interval);
    Menubar.interval = setInterval(setRandomLogo, 33, logoelement);
    
    
    setTimeout(setStartEndLogo, 330, logoelement, isMouseOver);

     
}
function setStartEndLogo(logoelement, isMouseOver)
{
    clearInterval(Menubar.interval);

    const endText = 'Home';
    const startText = "0010";
    
    let f = Boolean(isMouseOver);
    if (f)
        {
            logoelement.innerText = endText;
            return;
        }
        else {
            logoelement.innerText = startText;
        }
    
    
    
}
function setRandomLogo(logoelement)
{
    logoelement.innerText = getRandom4CharString();
}
function getRandom4CharString()
{
    const possibleCharacters = '01234567890123456789wertuioasdfhklzxcvbnmWERTYUIOPASDFGHJKLZXCVBNM';
    const possibleCharLength = possibleCharacters.length;
    let result = '';
    for (let i = 0; i < 4; i++)
    {
        result += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharLength));
    }
    return result;
}