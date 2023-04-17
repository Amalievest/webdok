//////////////////////////////////////////////////////////////////
////////////////////////// SCROLL FRA 5 //////////////////////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

var slideshow5 = document.getElementById("slideshow5");


//////////////// EVENT LISTENERS ////////////////

// Fremad
slideshow5.addEventListener("wheel", frem_slide6);

// Tilbage
slideshow5.addEventListener("wheel", tilbage_slide4);


//////////////// FUNKTIONER ////////////////

// Fremad
function frem_slide6(frem_s6) {

    if (frem_s6.deltaX > 0) {
        location.href = "slideshow6.html";
    } else {
        return null
    }
};


// Tilbage 
function tilbage_slide4(tilbage_s4) {

    if (tilbage_s4.deltaX < 0) {
        location.href = "slideshow4.html";
    } else {
        return null
    }
};


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

  if (e.keyCode == '37') {
       // left arrow
       location.href = "slideshow4.html";
    }
    else if (e.keyCode == '39') {
       // right arrow
       location.href = "slideshow6.html";
    }

}