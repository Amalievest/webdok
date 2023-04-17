//////////////////////////////////////////////////////////////////
////////////////////////// SCROLL FRA 2 //////////////////////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

var slideshow2 = document.getElementById("slideshow2");


//////////////// EVENT LISTENERS ////////////////

// Fremad
slideshow2.addEventListener("wheel", frem_slide3);

// Tilbage
slideshow2.addEventListener("wheel", tilbage_slide1);


//////////////// FUNKTIONER ////////////////

// Fremad
function frem_slide3(frem_s3) {

    if (frem_s3.deltaX > 0) {
        location.href = "slideshow3.html";
    } else {
        return null
    }
};

// Tilbage 
function tilbage_slide1(tilbage_s1) {

    if (tilbage_s1.deltaX < 0) {
        location.href = "slideshow1.html";
    } else {
        return null
    }
};


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

  if (e.keyCode == '37') {
       // left arrow
       location.href = "slideshow1.html";
    }
    else if (e.keyCode == '39') {
       // right arrow
       location.href = "slideshow3.html";
    }

}