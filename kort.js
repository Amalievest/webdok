//////////////////////////////////////////////////////////////////
/////////////////// BAGGRUNDSLYD (VIND) VOLUMEN //////////////////
//////////////////////////////////////////////////////////////////

var vind = document.getElementById("vind");

vind.volume = 0.25;



//////////////////////////////////////////////////////////////////
/////////////////// LINJER & GIFs & LOCATION ON //////////////////
//////////////////////////////////////////////////////////////////

//////////////// VARIABLER ////////////////

var location1 = document.getElementById("location1");
var location2 = document.getElementById("location2");
var location3 = document.getElementById("location3");
var location4 = document.getElementById("location4");
var location5 = document.getElementById("location5");
var location6 = document.getElementById("location6");
var location7 = document.getElementById("location7");
var location8 = document.getElementById("location8");
var location9 = document.getElementById("location9");


//////////////// STARTVÆRDIER ////////////////

location1.style.animation = "size ease-in-out 2s infinite";

//document.getElementById("gif1").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";


//////////////// FUNKTIONER ////////////////

// At definere gifs og linjer som variable virke ikke...

// Linje 0, GIF 1
function line0() {
    
    document.getElementById("gif1").style.animation = "fadeIn 2s";
    document.getElementById("gif1").style.visibility = "visible";

    document.getElementById("gif1").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";

    document.getElementById("lyd_txt").style.animation = "fadeIn 2s";
    document.getElementById("lyd_txt").style.visibility = "visible";

    location1.style.animation = "none";
    location2.style.animation = "size ease-in-out 2s infinite";
};

// Linje 1, GIF 1 til 2
function line1() {
    
    document.getElementById("gif1").style.animation = "fadeOut 2s";
    document.getElementById("gif2").style.animation = "fadeIn 2s";
    document.getElementById("gif2").style.visibility = "visible";

    document.getElementById("gif1").style.boxShadow = "none";
    document.getElementById("gif2").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";
    
    document.getElementById("linje1").style.visibility = "visible";
    document.getElementById("linje1").style.animation = "line_extend ease 2.5s";
    document.getElementById("linje1").style.animationIterationCount = "1";
    document.getElementById("linje1").style.animationFillMode = "forwards";

    location2.style.animation = "none";
    location3.style.animation = "size ease-in-out 2s infinite";
};

// Linje 2, GIF 2 til 3
function line2() {
    
    document.getElementById("gif2").style.animation = "fadeOut 2s";
    document.getElementById("gif3").style.animation = "fadeIn 2s";
    document.getElementById("gif3").style.visibility = "visible";

    document.getElementById("gif2").style.boxShadow = "none";
    document.getElementById("gif3").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";
    
    document.getElementById("linje2").style.visibility = "visible";
    document.getElementById("linje2").style.animation = "line_extend ease 2.5s";
    document.getElementById("linje2").style.animationIterationCount = "1";
    document.getElementById("linje2").style.animationFillMode = "forwards";

    location3.style.animation = "none";
    location4.style.animation = "size ease-in-out 2s infinite";
};

// Linje 3, GIF 3 til 4
function line3() {
    
    document.getElementById("gif3").style.animation = "fadeOut 2s";
    document.getElementById("gif4").style.animation = "fadeIn 2s";
    document.getElementById("gif4").style.visibility = "visible";

    document.getElementById("gif3").style.boxShadow = "none";
    document.getElementById("gif4").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";
    
    document.getElementById("linje3").style.visibility = "visible";
    document.getElementById("linje3").style.animation = "line_extend ease 2.5s";
    document.getElementById("linje3").style.animationIterationCount = "1";
    document.getElementById("linje3").style.animationFillMode = "forwards";

    location4.style.animation = "none";
    location5.style.animation = "size ease-in-out 2s infinite";
};

// Linje 4, GIF 4 til 5
function line4() {
    
    document.getElementById("gif4").style.animation = "fadeOut 2s";
    document.getElementById("gif5").style.animation = "fadeIn 2s";
    document.getElementById("gif5").style.visibility = "visible";

    document.getElementById("gif4").style.boxShadow = "none";
    document.getElementById("gif5").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";
    
    document.getElementById("linje4").style.visibility = "visible";
    document.getElementById("linje4").style.animation = "line_extend ease 2.5s";
    document.getElementById("linje4").style.animationIterationCount = "1";
    document.getElementById("linje4").style.animationFillMode = "forwards";

    location5.style.animation = "none";
    location6.style.animation = "size ease-in-out 2s infinite";
};

// Linje 5, GIF 5 til 6
function line5() {
    
    document.getElementById("gif5").style.animation = "fadeOut 2s";
    document.getElementById("gif6").style.animation = "fadeIn 2s";
    document.getElementById("gif6").style.visibility = "visible";

    document.getElementById("gif5").style.boxShadow = "none";
    document.getElementById("gif6").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";
    
    document.getElementById("linje5").style.visibility = "visible";
    document.getElementById("linje5").style.animation = "line_extend ease 2.5s";
    document.getElementById("linje5").style.animationIterationCount = "1";
    document.getElementById("linje5").style.animationFillMode = "forwards";

    location6.style.animation = "none";
    location7.style.animation = "size ease-in-out 2s infinite";
};

// Linje 6, GIF 6 til 7
function line6() {
    
    document.getElementById("gif6").style.animation = "fadeOut 2s";
    document.getElementById("gif7").style.animation = "fadeIn 2s";
    document.getElementById("gif7").style.visibility = "visible";

    document.getElementById("gif6").style.boxShadow = "none";
    document.getElementById("gif7").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";
    
    document.getElementById("linje6").style.visibility = "visible";
    document.getElementById("linje6").style.animation = "line_extend ease 2.5s";
    document.getElementById("linje6").style.animationIterationCount = "1";
    document.getElementById("linje6").style.animationFillMode = "forwards";

    location7.style.animation = "none";
    location8.style.animation = "size ease-in-out 2s infinite";
};

// Linje 7, GIF 7 til 8
function line7() {
    
    document.getElementById("gif7").style.animation = "fadeOut 2s";
    document.getElementById("gif8").style.animation = "fadeIn 2s";
    document.getElementById("gif8").style.visibility = "visible";

    document.getElementById("gif7").style.boxShadow = "none";
    document.getElementById("gif8").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";
    
    document.getElementById("linje7").style.visibility = "visible";
    document.getElementById("linje7").style.animation = "line_extend ease 2.5s";
    document.getElementById("linje7").style.animationIterationCount = "1";
    document.getElementById("linje7").style.animationFillMode = "forwards";

    location8.style.animation = "none";
    location9.style.animation = "size ease-in-out 2s infinite";
};

// Linje 8, GIF 8 til 9
function line8() {
    
    document.getElementById("gif8").style.animation = "fadeOut 2s";
    document.getElementById("gif9").style.animation = "fadeIn 2s";
    document.getElementById("gif9").style.visibility = "visible";

    document.getElementById("gif8").style.boxShadow = "none";
    document.getElementById("gif9").style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";
    
    document.getElementById("linje8").style.visibility = "visible";
    document.getElementById("linje8").style.animation = "line_extend ease 2.5s";
    document.getElementById("linje8").style.animationIterationCount = "1";
    document.getElementById("linje8").style.animationFillMode = "forwards";

    location9.style.animation = "none";
};



//////////////////////////////////////////////////////////////////
/////////////////////////// LYD PÅ GIFs //////////////////////////
//////////////////////////////////////////////////////////////////

//////////////// VAIABLER ////////////////

var lyd1 = document.getElementById("lyd1");
var lyd2 = document.getElementById("lyd2");
var lyd3 = document.getElementById("lyd3");
var lyd4 = document.getElementById("lyd4");
var lyd5 = document.getElementById("lyd5");
var lyd6 = document.getElementById("lyd6");
var lyd7 = document.getElementById("lyd7");
var lyd8 = document.getElementById("lyd8");
var lyd9 = document.getElementById("lyd9");


//////////////// EVENT LISTENERS ////////////////

// Lyd1 på gif1
document.getElementById("gif1").addEventListener("mouseover", lyd1_play); 
document.getElementById("gif1").addEventListener("mouseleave", lyd1_pause);

// Lyd2 på gif2
document.getElementById("gif2").addEventListener("mouseover", lyd2_play); 
document.getElementById("gif2").addEventListener("mouseleave", lyd2_pause);

// Lyd3 på gif3
document.getElementById("gif3").addEventListener("mouseover", lyd3_play); 
document.getElementById("gif3").addEventListener("mouseleave", lyd3_pause);

// Lyd4 på gif4
document.getElementById("gif4").addEventListener("mouseover", lyd4_play); 
document.getElementById("gif4").addEventListener("mouseleave", lyd4_pause);

// Lyd5 på gif5
document.getElementById("gif5").addEventListener("mouseover", lyd5_play); 
document.getElementById("gif5").addEventListener("mouseleave", lyd5_pause);

// Lyd6 på gif6
document.getElementById("gif6").addEventListener("mouseover", lyd6_play); 
document.getElementById("gif6").addEventListener("mouseleave", lyd6_pause);

// Lyd7 på gif7
document.getElementById("gif7").addEventListener("mouseover", lyd7_play); 
document.getElementById("gif7").addEventListener("mouseleave", lyd7_pause);

// Lyd8 på gif8
document.getElementById("gif8").addEventListener("mouseover", lyd8_play); 
document.getElementById("gif8").addEventListener("mouseleave", lyd8_pause);

// Lyd9 på gif9
document.getElementById("gif9").addEventListener("mouseover", lyd9_play); 
document.getElementById("gif9").addEventListener("mouseleave", lyd9_pause);


//////////////// FUNKTIONER ////////////////

// Lyd1 på gif1
function lyd1_play() {
    lyd1.play();
};

function lyd1_pause() {
    lyd1.pause();
};


// Lyd2 på gif2
function lyd2_play() {
    lyd2.play();
};

function lyd2_pause() {
    lyd2.pause();
};


// Lyd3 på gif3
function lyd3_play() {
    lyd3.play();
};

function lyd3_pause() {
    lyd3.pause();
};


// Lyd4 på gif4
function lyd4_play() {
    lyd4.play();
};

function lyd4_pause() {
    lyd4.pause();
};


// Lyd5 på gif5
function lyd5_play() {
    lyd5.play();
};

function lyd5_pause() {
    lyd5.pause();
};


// Lyd6 på gif6
function lyd6_play() {
    lyd6.play();
};

function lyd6_pause() {
    lyd6.pause();
};


// Lyd7 på gif7
function lyd7_play() {
    lyd7.play();
};

function lyd7_pause() {
    lyd7.pause();
};


// Lyd8 på gif8
function lyd8_play() {
    lyd8.play();
};

function lyd8_pause() {
    lyd8.pause();
};


// Lyd9 på gif9
function lyd9_play() {
    lyd9.play();
};

function lyd9_pause() {
    lyd9.pause();
};
