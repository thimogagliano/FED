// JavaScript Document

/* variabelen */

var buttonNav 
buttonNav = document.querySelector("button");

var menuNav 
menuNav = document.querySelector("body header nav ul");


/* code */

console.log(buttonNav);

console.log(menuNav);

buttonNav.addEventListener("click", hamburgerMenu);

function hamburgerMenu(){
    menuNav.classList.toggle("menu");
    console.log("test hamburgerMenu");
};