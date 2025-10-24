"use strict";
const CHECK_ID = "binariePortfolio_HasBeenVisited";
const TIMEOUT = 6000;
const DEBUG = false;

let overlay = document.getElementById("overlay");




function init(e)
{
    console.log("Is this happening?");
    if (DEBUG)
    {
        playAnimation();
        return;
    }
    
    let id = localStorage.getItem(CHECK_ID);

    if (id == null)
    {
        localStorage.setItem(CHECK_ID, "true");
        playAnimation();
    }
    else
    {
        end();
    }
}

function end()
{
    document.body.removeChild(overlay);
}


function playAnimation()
{
    setTimeout(() => {overlay.style.opacity = 0;}, TIMEOUT - 1000);
    setTimeout(end, TIMEOUT);
}

window.onload = init;

/*
//DEBUG - MAKE SURE TO COMMENT THIS OUT
window.onclose += (e) =>
{
    localStorage.clear();
};

*/