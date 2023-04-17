//////////////////////////////////////////////////////////////////
////////////////////////// SCROLL FRA 3 //////////////////////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

var slideshow3 = document.getElementById("slideshow3");


//////////////// EVENT LISTENERS ////////////////

// Fremad
slideshow3.addEventListener("wheel", frem_slide4);

// Tilbage
slideshow3.addEventListener("wheel", tilbage_slide2);


//////////////// FUNKTIONER ////////////////

// Fremad
function frem_slide4(frem_s4) {

    if (frem_s4.deltaX > 0) {
        location.href = "slideshow4.html";
    } else {
        return null
    }
};

// Tilbage 
function tilbage_slide2(tilbage_s2) {

    if (tilbage_s2.deltaX < 0) {
        location.href = "slideshow2.html";
    } else {
        return null
    }
};

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

  if (e.keyCode == '37') {
       // left arrow
       location.href = "slideshow2.html";
    }
    else if (e.keyCode == '39') {
       // right arrow
       location.href = "slideshow4.html";
    }

}