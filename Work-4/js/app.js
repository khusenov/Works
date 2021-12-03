let burger = document.querySelector(".nav__burger");
let nav = document.querySelector('.nav__menu');
let body = document.querySelector('body');

function burgerActive() {
    let input = burger.querySelector('input');
    input.checked = true;
    burger.classList.add('active');
    burger.classList.remove('inactive');
    nav.classList.add('active');
    body.classList.add('scroll-lock')
}

function burgerInactive() {
    let input = burger.querySelector('input');
    input.checked = false;
    burger.classList.add('inactive');
    burger.classList.remove('active')
    nav.classList.remove('active');
    body.classList.remove('scroll-lock');
}

function burgerToggle() {
    let input = burger.querySelector('input');
    input.checked ? burgerInactive() : burgerActive();
}

burger.addEventListener('click', burgerToggle)