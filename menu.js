//////////////////////////////////////////////////////////////////
//////////////////// SCROLL FRA MENU TIL COVER ///////////////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

// Vi definerer body fra index og menu som variabler.
var menu_body = document.getElementById("menu_body");


//////////////// EVENT LISTENERS ////////////////

// Vi bruger wheel i stedet for mousewheel, fordi den er forældet og ikke virker i FireFox.
// Scroll virker ikke, fordi elementet er fixed, så der er ikke scroll i det.
// Hele vinduet skal lytte efter, at der scrolles på musehjulet/mousepaden. Så skal "open_cover" gå i gang.
menu_body.addEventListener("wheel", open_cover);


//////////////// FUNKTIONER ////////////////

function open_cover(scroll_menu) {

    /* Er på 0 fra start. Scroller op og kommer derved op i de positive tal => ændringen (delta) er mindre end 0, 
    fordi delta = 0 - (+x) = 0 - x. */
    if (scroll_menu.deltaY < 0) {
        location.href = "index.html";
    }
    // Ellers gør intet.
    else {
        return null;
    }
};



