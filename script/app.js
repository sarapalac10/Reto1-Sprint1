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
    hambMenu.addEventListener("click", verMenu)

    const cierreHamb = document.getElementById("close-mobile")
    cierreHamb.addEventListener("click", verMenu)
}

function verMenu() {
    const navegacion = document.querySelector(".navegacion");
    if (navegacion.classList.contains("menuHamburguesa")) {
        console.log("prueba")
        navegacion.classList.remove("menuHamburguesa")
    } else {
        console.log("prueba2")
        navegacion.classList.add("menuHamburguesa")
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





