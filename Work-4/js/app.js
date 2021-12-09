const navMenu = document.querySelector('.nav__menu'),
    dropdown = document.querySelector('.nav__dropdown span'),
    dropdownMenu = document.querySelector('.nav__dropdown ul'),
    burger = document.querySelector('.nav__burger');

let burgerInput = false,
    dropdownInput = false;

function navMenuOpen() {
    burgerInput = true;
    burger.classList.add('open');
    burger.classList.remove('close');
    navMenu.style.height = navMenu.scrollHeight + 'px';
}

function navMenuClose() {
    burgerInput = false;
    navMenu.style.height = navMenu.scrollHeight + 'px';
    setTimeout(() => navMenu.removeAttribute('style'), 0.0000000001);
    burger.classList.add('close');
    burger.classList.remove('open');
}

burger.addEventListener('click', () => {
    burgerInput ? navMenuClose() : navMenuOpen();
})

function dropdownMenuOpen() {
    dropdownInput = true;
    dropdown.classList.add('active');
    dropdownMenu.style.height = dropdownMenu.scrollHeight + 'px';
    navMenu.style.height = 'auto'
}

function dropdownMenuClose() {
    dropdownInput = false;
    dropdown.classList.remove('active');
    dropdownMenu.removeAttribute('style');
    navMenu.style.height = 'auto';

    !window.matchMedia('(max-width: 54rem)').matches ? navMenu.removeAttribute('style') : null;
}

dropdown.addEventListener('click', () => {
    dropdownInput ? dropdownMenuClose() : dropdownMenuOpen();
})

window.matchMedia('(max-width: 54rem)').matches ? null : navMenu.removeAttribute('style');

window.addEventListener('resize', () => {
    window.matchMedia('(max-width: 54rem)').matches ? null : navMenu.removeAttribute('style');
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        769: {
            items: 2
        }
    }
})