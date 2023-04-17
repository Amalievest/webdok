//////////////////////////////////////////////////////////////////
////////////////////////// SCROLL FRA 4 //////////////////////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

var slideshow4 = document.getElementById("slideshow4");


//////////////// EVENT LISTENERS ////////////////

// Fremad
slideshow4.addEventListener("wheel", frem_slide5);

// Tilbage
slideshow4.addEventListener("wheel", tilbage_slide3);


//////////////// FUNKTIONER ////////////////

// Fremad
function frem_slide5(frem_s5) {

    if (frem_s5.deltaX > 0) {
        location.href = "slideshow5.html";
    } else {
        return null
    }
};

// Tilbage
function tilbage_slide3(tilbage_s3) {

    if (tilbage_s3.deltaX < 0) {
        location.href = "slideshow3.html";
    } else {
        return null
    }
};


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

  if (e.keyCode == '37') {
       // left arrow
       location.href = "slideshow3.html";
    }
    else if (e.keyCode == '39') {
       // right arrow
       location.href = "slideshow5.html";
    }

}