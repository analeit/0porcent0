// JAVASCRIPT FILE 

/* Ana Leite */

// check JS
console.log ('hello 0porcent0!');


// BODY _____________________________________________________


// HOME PAGE _____________________________________________________

// HEADER





//____________________________

// CURSOR
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})

// DISPLAY HOME
function displayHome() {
  // escrito por extenso porque JQuery não estava a funcionar??????????
  document.getElementById("home").style.display = "block";
  document.getElementById("info").style.display = "none";
  document.getElementById("about").style.display = "none" 
  document.getElementById("archive").style.display = "none" 


  // close input page ?????
  let inputPage = document.getElementById('input-page');
  inputPage.style.display = 'none';


  if (inputPage.style.display  == 'none') {
    // CLOSE BLUR BACKGROUND INPUT PAGE
    document.getElementById("home").style.filter = "blur(0px)";
  }


  // INPUT PAGE TEXT
  document.getElementById("input-page-text").style.display = 'none'; 

}


// PARALLAX HOME NAV
const pos = document.documentElement;
pos.addEventListener("mousemove", e => {
  pos.style.setProperty('--x', e.clientX + "px");
  pos.style.setProperty('--y', e.clientY + "px");
})


// DISPLAY INFO

function displayInfo() {
  // get the clock
  let Info = document.getElementById('info');

  Info.style.display = 'flex';
  Info.style.right = '0';
  Info.style.width = '65vh';

  
  /* slide
  Info.style.width = '50vh';*/


  /* show and hide on the same button
  // get the current value of the info's display property
  let displaySetting = Info.style.display;

  // also get the info button, so we can change what it says
  let InfoButton = document.getElementById('InfoButton');

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'block') {
    // clock is visible. hide it
    Info.style.display = 'none';
    // change button text
    //InfoButton.innerHTML = '?';
  }
  else {
    // clock is hidden. show it
    Info.style.display = 'block';
    // change button text
    //InfoButton.innerHTML = 'X';
  }*/
}


//
function closeInfo() {
  // get the clock
  let Info = document.getElementById('info');

  Info.style.display = 'none';
}



/*
// CLOSE OVERLAY INFO CLICKING OUTSIDE
$(document).mouseup(function (e) {
  if ($(e.target).closest("#info").length
              === 0) {
      $("#info").hide();
  }
});*/

// BLUR BACKGROUND ????



// DISPLAY INPUT PAGE
function openInputPage() {
  document.getElementById("input-page").style.display = "block";

  // BLUR BACKGROUND INPUT PAGE
  document.getElementById("home").style.filter = "blur(8px)";

  document.getElementById("input-page").style.filter = "blur(0)";
}





// DISPLAY INPUT PAGE TEXT
function displayInputText() {
  document.getElementById("input-page-text").style.display = "block";

  document.getElementById("input-page").style.filter = "blur(8px)";

}


/*
// RESIZE TEXT AREA ACCORDING TO CONTENT
const textarea = element.getElementsByTagName(textarea);

textarea.addEventListener("input", function (e) {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});
*/








// DISPLAY ABOUT
function displayAbout() {
  // variaveis
  let About = document.getElementById('about');
  let Home = document.getElementById('home');

  About.style.display = 'block';
  Home.style.display = 'none';
}



// DISPLAY ARCHIVE
function displayArchive() {
  // variaveis
  let Archive = document.getElementById('archive');
  let Home = document.getElementById('home');

  Archive.style.display = 'block';
  Home.style.display = 'none';
}














/*
// POP UPS - random position --------------------------------------------------------*/

const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

// ????? for each ????

const popup= document.querySelector('.popup');
popup.style.left= getRandom(0, 70)+'vw'; // 👈🏼 Horizontally
popup.style.top = getRandom(0, 70)+'vh'; // 👈🏼 Vertically

// ------------------------








// !!!!!!!!! toggle switch TEST

var timer,
    counter = 0;
    
// create new elemnt 
function makeNew() {

  // create a new div 
  let popups = document.body.appendChild( document.createElement('div') );
  // with a class 
  popups.className = "popup";
  
  // text of new element 
  // !!! INNER TEXT = VAR (USER INPUT)
  counter++;  
  popups.innerHTML = 'pop up '+counter+'';
  
  // ??? definir intervalo ecra
  
  // random localization 
  let x = Math.random() * window.innerWidth + "px";
  let y = Math.random() * window.innerHeight + "px";


  popups.style.left = x;
  popups.style.top = y;
}

// POP UPS APPEAR 
//timer = setInterval(makeNew, 1000);



// toggle switch (ON/OFF)
$(document).ready(function(){
  $(".switcher input").on("change", function(e) {
    const isOn = e.currentTarget.checked;

    if (isOn) {
        //mostra todos os popups
        $("#popup-space").show();
        // aparece progressivamente
        //timer = setInterval(makeNew, 1000);

    } else {

      // esconde popups
        $("#popup-space").hide();
        // continua a mostrar mas deixa de gerar ao longo do tempo
        
        // aparece progressivamente
        //clearInterval(timer); 
    }
  });
});






/* POP UPS APPEAR _________________
var timer,
    counter = 0;
    
// create new elemnt 
function makeNew() {

  // create a new div 
  let popups = document.body.appendChild( document.createElement('div') );
  // with a class 
  popups.className = "popup";
  
  
  // text of new element 
  // !!! INNER TEXT = VAR (USER INPUT)
  counter++;  
  popups.innerHTML = 'pop up '+counter+'';
  
    
  // random localization 
  let x = Math.random() * window.innerWidth + "px";
  let y = Math.random() * window.innerHeight + "px";
  popups.style.left = x;
  popups.style.top = y;
}

// set interval of time 
// start 
function startPopups() {
    timer = setInterval(makeNew, 1000);

}
// stop
function stoppPopups() {
    clearInterval(timer);
}*/

/*
// começar quando a página é carregada
window.onload = startPopups();*/














/*
// ANIMATED CURSOR
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})*/

/*function changeMouse(){
  if (mouse.clientX > 20%(window.screen.width) &  mouse.clientX < 80%(window.screen.width) ) {
  document.getElementById("home").style.cursor = url("images/icon-3.png"),auto;
  }
}*/

