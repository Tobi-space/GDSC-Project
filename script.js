
var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-lis li");

hamburger.addEventListener("click",function(){
 this .classList.toggle("click");
 navlist.classList.toggle("open");
});