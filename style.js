/*  
    *Menu Secund 
    *Foi Dividido Por Matéria
 */

var menuLet = document.querySelector('.link-nav-arrow-let');
var listSecondlet = document.querySelector('.list-nav-let');

var menuHum = document.querySelector('.link-nav-arrow-hum');
var listSecondhum = document.querySelector('.list-nav-hum');

var menuExt = document.querySelector('.link-nav-arrow-ext');
var listSecondext = document.querySelector('.list-nav-ext');

var menuMat = document.querySelector('.link-nav-arrow-mat');
var listSecondmat = document.querySelector('.list-nav-mat');


menuLet.addEventListener('click', function(){

    listSecondlet.classList.toggle('hide');
    menuLet.classList.toggle('arrow');
    
});

menuHum.addEventListener('click', function(){

    listSecondhum.classList.toggle('hide');
    menuHum.classList.toggle('arrow');
    
});

menuExt.addEventListener('click', function(){

    listSecondext.classList.toggle('hide');
    menuExt.classList.toggle('arrow');
    
});

menuMat.addEventListener('click', function(){

    listSecondmat.classList.toggle('hide');
    menuMat.classList.toggle('arrow');
    
});

/* MENU HAMBURGUER */

var iconMenu = document.querySelector(".icon-menu");
var menu = document.querySelector(".menu");
var content = document.querySelector(".content");

iconMenu.addEventListener("click", function(){

   menu.classList.toggle('menu__move');
   content.classList.toggle('content__move');
   
});