'use strict';
const body = document.querySelector('body');
const nav = {
    menu: document.querySelector('.nav__menu'),
    burger: document.querySelector('.nav__burger'),
    isOpen: false,
    open() {
        if (!this.isOpen) {
            this.isOpen = true;
            this.menu.classList.add('active');
            this.burger.classList.add('active');
            body.classList.add('scroll-lock');
        }
    },
    close() {
        if (this.isOpen) {
            this.isOpen = false;
            this.menu.classList.remove('active');
            this.burger.classList.remove('active');
            body.classList.remove('scroll-lock');
        }
    },
    toggle() {
        this.isOpen ? this.close() : this.open();
    },
};
nav.close();
nav.burger.addEventListener('click', () => nav.toggle());
