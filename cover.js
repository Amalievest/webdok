//////////////////////////////////////////////////////////////////
/////////// PIL FADER IND OG HOPPER, NÅR VIDEO SLUTTER ///////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

// Vi definerer videoen og pilen som variabler.
var video = document.getElementById("cover_video");
var expand_more = document.getElementById("expand_more");



//////////////// EVENT LISTENERS ////////////////

// Videoen skal lytte efter hvornår den er "ended", så skal funktionen "expand_more_fade" gå i gang.
video.addEventListener("ended", expand_more_fade);

/* Pilen skal lytte efter hvornår den er færdig med animationen, altså færdig med at fade ind. 
Så skal funktionen "expand_more_bounce" gå i gang. */
expand_more.addEventListener("animationend", expand_more_bounce);




//////////////// FUNKTIONER ////////////////

// Vi definerer funktionen "expand_more_fade".
function expand_more_fade() {

    // Pilen skal blive "visible".
    expand_more.style.visibility = "visible";

    // Pilen skal "fade in" på "2s" (fadeIn er lavet som @keyframes i css).
    expand_more.style.animation = "fadeIn 2s";
};


// Vi definerer funktionen "expand_more_bounce".
function expand_more_bounce() {

    // Pilen skal "bounce" hvert "1.5s" i "infinite" tid.
    expand_more.style.animation = "bounce 1.5s infinite";
};





//////////////////////////////////////////////////////////////////
//////////////// SCROLL OG KLIK FRA COVER TIL MENU ///////////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

// Vi definerer body fra index og menu som variabler.
var cover_body = document.getElementById("cover_body");
var menu_body = document.getElementById("menu_body");


//////////////// EVENT LISTENERS ////////////////

// Vi bruger wheel i stedet for mousewheel, fordi den er forældet og ikke virker i FireFox.
// Scroll virker ikke, fordi elementet er fixed, så der er ikke scroll i det.
// Hele vinduet skal lytte efter, at der scrolles på musehjulet/mousepaden. Så skal "open_menu" gå i gang.
cover_body.addEventListener("wheel", open_menu);

expand_more.addEventListener("click", spring);


//////////////// FUNKTIONER ////////////////

function open_menu(scroll_cover) {

    /* Er på 0 fra start. Scroller ned og kommer derved ned i de positive tal => ændringen (delta) er større end 0 
    (fordi delta = 0 - (-x) = 0 + x). */
    if (scroll_cover.deltaY > 0) {
        location.href = "menu.html";
    }
    // Ellers gør intet.
    else {
        return null
    }
};


function spring() {
    location.href = "menu.html";
};



