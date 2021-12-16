// JavaScript Document

/* variabelen */

/* variabelen hamburgermenu */

var buttonNav
buttonNav = document.querySelector("button");

var menuNav
menuNav = document.querySelector("body header nav ul");

/* variabelen footerdropdown 1 volg ons*/

var footerdropEen
footerdropEen = document.querySelector("footer div");

var volgOns
volgOns = document.querySelector("footer p:first-of-type");

/* variabelen footerdropdown 2 merken*/

var footerdropTwee
footerdropTwee = document.querySelector("footer section:first-of-type");

var merken
merken = document.querySelector("footer p:nth-of-type(2)");

/* variabelen footerdropdown 3 ontdek landen*/

var footerdropDrie
footerdropDrie = document.querySelector("footer section:nth-of-type(2).landen");

var ontdekLanden
ontdekLanden = document.querySelector("footer p:nth-of-type(3)")



/* code */

/* code van hamburgermenu */

console.log(buttonNav);

console.log(menuNav);

buttonNav.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
    menuNav.classList.toggle("menu");
    console.log("test hamburgerMenu");
};

/* code van footerdropdown 1 volg ons */

console.log(footerdropEen);

console.log(volgOns);

volgOns.addEventListener("click", dropdownEen);

function dropdownEen() {
    footerdropEen.classList.toggle("openeen");
    console.log("test dropdownEen")
    volgOns.classList.toggle("dichteen");
};

/* code van footerdropdown 2 merken*/

console.log(footerdropTwee);

console.log(merken);

merken.addEventListener("click", dropdownTwee);

function dropdownTwee() {
    footerdropTwee.classList.toggle("opentwee");
    console.log("test dropdownTwee")
    merken.classList.toggle("dichttwee");
}

/* code van footerdropdown 3 ontdek landen */

console.log(footerdropDrie);

console.log(ontdekLanden);

ontdekLanden.addEventListener("click", dropdownDrie);

function dropdownDrie() {
    footerdropDrie.classList.toggle("landen");
    console.log("test dropdownDrie")
    ontdeklanden.classList.toggle("dichtdrie");
}