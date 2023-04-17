//////////////////////////////////////////////////////////////////
////////////////////////// SCROLL FRA 1 //////////////////////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

var slideshow1 = document.getElementById("slideshow1");


//////////////// EVENT LISTENERS ////////////////

// Fremad
slideshow1.addEventListener("wheel", frem_slide2);


//////////////// FUNKTIONER ////////////////

// Fremad

function frem_slide2(frem_s2) {

    if (frem_s2.deltaX > 0) {
        location.href = "slideshow2.html";
    } else {
        return null
    }
};

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

 if (e.keyCode == '39') {
       // right arrow
       location.href = "slideshow2.html";
    }

}