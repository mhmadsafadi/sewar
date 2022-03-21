const swiper = new Swiper(".hero-carousel", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "fade",
});

var slider = new Swiper(".slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
              hiddenClass: ".swiper-button-hidden",
          },
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
    },
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var cardSwiper = new Swiper(".card-swiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
});

function Animate() {
  var animates = document.querySelectorAll(".animate");

  for (var i = 0; i < animates.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animates[i].getBoundingClientRect().top;
    var elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      animates[i].classList.add("visible");
    } else {
      animates[i].classList.remove("visible");
    }
  }
}
window.addEventListener("scroll", Animate);

/* ---------------------------------- */


var whatsApp = document.getElementById("whatsapp");
var backToTop = document.getElementById("backToTop");

function scrollFN() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    whatsApp.style.display = "block";
    backToTop.style.display = "block";
  } else {
    whatsApp.style.display = "none";
    backToTop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFN()};

/* -------Popover------- */

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


/* ---------- Product Gellary Modal----------- */
