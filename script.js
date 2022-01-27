let hamburguer = document.querySelector('.hamburguer__wrap');
let bar1= document.querySelector('.hamburguer__barra1')
let bar2= document.querySelector('.hamburguer__barra2')
let bar3= document.querySelector('.hamburguer__barra3')
let nav_mobile= document.querySelector('.mobile__nav__menu')

function clickHambur() {
        bar1.classList.toggle("active");
        bar2.classList.toggle("active");
        bar3.classList.toggle("active");
        nav_mobile.classList.toggle("active");
}


hamburguer.addEventListener('click', clickHambur());

