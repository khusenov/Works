let burger = document.querySelector('.nav__burger');
let nav = document.querySelector('.nav__menu');
let dropdown = document.querySelector('.nav__dropdown');
let dropdownMenu = dropdown.querySelector('.nav__dropdown__menu');
let dropdownInput = false;

function burgerActive() {
    let input = burger.querySelector('input');
    input.checked = true;
    burger.classList.add('active');
    burger.classList.remove('inactive');
    nav.style.height = nav.scrollHeight + 'px';
}

function burgerInactive() {
    let input = burger.querySelector('input');
    input.checked = false;
    burger.classList.remove('active');
    burger.classList.add('inactive');
    nav.removeAttribute('style');
}

function burgerToggle() {
    let input = burger.querySelector('input');
    input.checked ? burgerInactive() : burgerActive();
}

function handleGetHeight() {
    let navHeight = nav.scrollHeight;
    console.log(navHeight);
    return navHeight;
}

function dropdownOpen() {
    dropdownInput = true;
    dropdownMenu.style.height = dropdownMenu.scrollHeight + 'px';
    nav.style.height = handleGetHeight() + 'px';
}

function dropdownClose() {
    dropdownInput = false;
    dropdownMenu.removeAttribute('style');
    nav.style.height = handleGetHeight() + 'px';
}

function dropdownToggle() {
    dropdownInput ? dropdownClose() : dropdownOpen();
}

burger.addEventListener('click', burgerToggle);
dropdown.addEventListener('click', dropdownToggle);