/** creating button click show hide navbar **/
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed = new Typed(".input", {
    strings: ["Backend Developer", "API Tester", "Web Developer", "Bugs Fixer"],
    typedSpeed: 100,
    backSpeed: 80,
    loop: true
})