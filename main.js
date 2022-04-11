// JAVASCRIPT FILE 

  /*
  Ana Leite
  */

// check JS
console.log ('hello 0porcent0!');


// BODY _____________________________________________________


// ____________ NAV _____________
// ACEDER A CADA "PÁGINA"
// quando se clica no botão de Home, mostra essa página e esconde as outras

// DISPLAY HOME
function displayHome() {
  // escrito por extenso porque JQuery não estava a funcionar
  document.getElementById("home").style.display = "block";
  document.getElementById("info").style.display = "none";
  document.getElementById("about").style.display = "none"
}

// DISPLAY INFO
function displayInfo() {
  document.getElementById("home").style.display = "block";
  document.getElementById("info").style.display = "block";
  document.getElementById("about").style.display = "none";
}

// DISPLAY ABOUT
function displayAbout() {
  document.getElementById("home").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("about").style.display = "block";
}



// ____________ FIM NAV _____________




// HOME ________________________________________________
