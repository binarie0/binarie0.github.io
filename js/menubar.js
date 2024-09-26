//STATIC INSTANCE FOR BETTER USAGE
class Menubar
{
    static interval = null;
}

//animates the logo
function animateLogoText(isMouseOver)
{

    //clear the interval (hover off and on again)
    clearInterval(Menubar.interval);

    //get logo element
    let logoelement = document.getElementById('logo');

    let duration = isMouseOver ? 500 : 200;

    //set an interval to setRandomLogo(logoelement) every 20 ms
    Menubar.interval = setInterval(setRandomLogo, 33, logoelement);

    //after 200 ms, end interval and start setStartEndLogo(logoelement, isMouseOver);
    setTimeout(setStartEndLogo, duration, logoelement, isMouseOver);
}

//sets the end attribute (hover vs not hover)
function setStartEndLogo(logoelement, isMouseOver)
{

    //clear the interval
    clearInterval(Menubar.interval);


    const endText = 'Home';
    const startText = "0010";
    let f = Boolean(isMouseOver);
    
    //if the mouse is hovering, switch to home. otherwise switch to the 0010
    if (f)
    {
        logoelement.innerText = endText;
    }
    else {
        logoelement.innerText = startText;
    }
    
}

//set the logo characters
function setRandomLogo(logoelement)
{
    logoelement.innerText = getRandom4CharString();
}

//gets and returns a 4 character string to replace 0010 or home in the logo
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