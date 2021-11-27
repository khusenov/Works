window.addEventListener("load", () => {
  let burger = document.querySelector(".nav .burger");

  function burgerToggle() {
    let input = burger.querySelector("input");

    if (!input.checked) {
      input.checked = true;
      burger.className = "burger active";
    } else {
      input.checked = false;
      burger.className = "burger inactive";
    }
  }

  function nav() {
    burgerToggle();
    let input = burger.querySelector("input").checked;
    let menu = document.querySelector(".nav__menu");

    if (input) {
      document.querySelector("body").style.overflow = "hidden";
      menu.style.height = `${menu.scrollHeight}px`;
    } else {
      document.querySelector("body").removeAttribute("style");
      menu.removeAttribute("style");
    }
  }

  burger.addEventListener("click", nav);

  $(".comments__box-container").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 750,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
