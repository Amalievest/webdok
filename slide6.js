//////////////////////////////////////////////////////////////////
////////////////////////// SCROLL FRA 6 //////////////////////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

var slideshow6 = document.getElementById("slideshow6");


//////////////// EVENT LISTENERS ////////////////

// Tilbage
slideshow6.addEventListener("wheel", tilbage_slide5);


//////////////// FUNKTIONER ////////////////

// Tilbage 
function tilbage_slide5(tilbage_s5) {

    if (tilbage_s5.deltaX < 0) {
        location.href = "slideshow5.html";
    } else {
        return null
    }
};


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

  if (e.keyCode == '37') {
       // left arrow
       location.href = "slideshow5.html";
    }
 
}