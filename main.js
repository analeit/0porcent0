// JAVASCRIPT FILE 

/* Ana Leite */

// check JS
console.log ('hello 0porcent0!');


// BODY _____________________________________________________


// HOME PAGE _____________________________________________________

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


  // close input page ?????
  let inputPage = document.getElementById('input-page');
  inputPage.style.display = 'none';


  if (inputPage.style.display  == 'none') {
    // CLOSE BLUR BACKGROUND INPUT PAGE
    document.getElementById("home").style.filter = "blur(0px)";
  }

}





// DISPLAY INFO
// show and hide on the same button
function displayInfo() {
  // get the clock
  let Info = document.getElementById('info');

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
  }
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
}



function displayInputText() {
  document.getElementById("input-text").style.display = "block";
}









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

  Archive.style.display = 'block';
}



















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

