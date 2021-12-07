$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [`<i class='icon arrow-left'></i>`, `<i class='icon arrow-right'></i>`],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

window.addEventListener('load', function () {
    let burger = document.querySelector('.nav__burger'),
        navMenu = document.querySelector('.nav__menu'),
        burgerInput = false,
        body = document.querySelector('body');

    function burgerOpen() {
        burgerInput = true;
        burger.classList.add('open');
        burger.classList.remove('close');
        navMenu.classList.add('active');
        body.style.overflow = 'hidden'
        searchClose();
    }

    function burgerClose() {
        burgerInput = false;
        burger.classList.add('close');
        burger.classList.remove('open');
        navMenu.classList.remove('active');
        body.removeAttribute('style');
    }

    function burgerToggle() {
        burgerInput ? burgerClose() : burgerOpen();
    }

    burger.addEventListener('click', burgerToggle);

    let search = document.querySelector('.nav__icons label'),
        searchFocus = false,
        searchSection = document.querySelector('.nav__search');

    function searchOpen() {
        searchFocus = true;
        searchSection.classList.add('active');
        burgerClose();
    }

    function searchClose() {
        searchFocus = false;
        searchSection.classList.remove('active');
    }

    function searchToggle() {
        searchFocus ? searchClose() : searchOpen();
    }

    search.addEventListener('click', searchToggle);
}
)