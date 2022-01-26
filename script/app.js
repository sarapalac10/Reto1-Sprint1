/*Acordeon*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*Features*/

document.addEventListener('DOMContentLoaded',function() {
    eventListeners();
});

function eventListeners(){
    const simpleBtn = document.getElementById("simple");
    simpleBtn.addEventListener("click", activarSimple);

    const speedyBtn = document.getElementById("speedy");
    speedyBtn.addEventListener("click", activarSpeedy);

    const easyBtn = document.getElementById("easy");
    easyBtn.addEventListener("click", activarEasy);

    const hambMenu = document.getElementById("menu-mobile");
    hambMenu.addEventListener("click", verMenu);

    const cierreHamb = document.getElementById("close-mobile");
    const ocultarNavegacion = document.querySelector(".ocultarNavegacion");
    cierreHamb.addEventListener("click", verMenu);
    cierreHamb.addEventListener("click", () => 
        ocultarNavegacion.classList.add("ocultarNavegacion")
    );

};

function verMenu() {
    const navegacion = document.querySelector(".navegacion");
    const ocultarNavegacion = document.querySelector(".ocultarNavegacion");
    if (navegacion.classList.contains("menuHamburguesa")) {
        navegacion.classList.remove("menuHamburguesa");
    } else {
        navegacion.classList.add("menuHamburguesa");
        ocultarNavegacion.classList.remove("ocultarNavegacion")
    }
}


function activarSimple() {
    const simpleMenu = document.querySelector(".simpleMenu");
    if (simpleMenu.classList.contains('noMostrar-feature')) {
        simpleMenu.classList.remove('noMostrar-feature')
    } else {
    simpleMenu.classList.add('noMostrar-feature')
    }
};

function activarSpeedy() {
    const speedyMenu = document.querySelector(".speedyMenu");
    if (speedyMenu.classList.contains('noMostrar-feature')) {
        speedyMenu.classList.remove('noMostrar-feature')
    } else {
        speedyMenu.classList.add('noMostrar-feature')
    }
};

function activarEasy() {
    const easyMenu = document.querySelector(".easyMenu");
    if (easyMenu.classList.contains('noMostrar-feature')) {
        easyMenu.classList.remove('noMostrar-feature')
    } else {
        easyMenu.classList.add('noMostrar-feature')
    }
};


//Validación del formulario
const form  = document.getElementsByTagName('form');

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {

  if (email.validity.valid) {
    emailError.innerHTML = ''; 
    emailError.className = 'error'; 
  } else {
    showError();
  }
});

form.addEventListener('submit', function (event) {

  if(!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    emailError.textContent = "Whoops, make sure it's an email.";
  } else if(email.validity.typeMismatch) {
    emailError.textContent = "Whoops, make sure it's an email.";
  } 

emailError.className = 'error active';
}

