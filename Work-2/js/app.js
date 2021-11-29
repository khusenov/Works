let burger = document.querySelector(".burger");
let nav = document.querySelector('.nav__menu');

function burgerActive() {
  burger.querySelector("input").checked = true;
  burger.className = "burger active";
  document.querySelector('body').style.overflow = 'hidden';
}

function burgerInactive() {
  burger.querySelector("input").checked = false;
  burger.className = "burger inactive";
  document.querySelector('body').removeAttribute('style')
}

function burgerToggle() {
  let input = burger.querySelector("input").checked;
  input ? burgerInactive() : burgerActive();
}

function navActive() {
    nav.classList.add('active');
}

function navInactive() {
    nav.classList.remove('active')
}

function navToggle() {
  let input = burger.querySelector("input").checked;
  input ? navActive() : navInactive();
}

burger.addEventListener("click", () => {
    burgerToggle();
    navToggle();
});
