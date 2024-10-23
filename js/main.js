// add classe do hovered para seleciona listas do item (list item)
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


// Modo dark 

var icon = document.getElementById("icon");

icon.onclick = function() {
 
     document.body.classList.toggle("dark")
     if(document.body.classList.contains("dark")) {
      icon.src = " ../imgs/claro-removebg-preview.png"
     } else{
      icon.src = " ../imgs/escuro-removebg-preview.png"
     } 
}


 
 
