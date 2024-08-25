// Custom Scripts
// Custom scripts



// burger menu
const menu = document.querySelector('.nav__menu');
const burger = document.querySelector('.nav__burger');
const menuLinks = menu.querySelectorAll('a');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});




// SWIPER


const swiperBranch = new Swiper('.branch__swiper', {

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next.branch-next',
        prevEl: '.swiper-button-prev.branch-prev',
    },

    slidesPerView: 1,
    spaceBetween: 140,

    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

});


const swiperReview = new Swiper('.reviews__swiper', {

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next.reviews-next',
        prevEl: '.swiper-button-prev.reviews-prev',
    },

    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },


    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
        }
    }

});



// BRANCH ITEM SWIPER

const swiperBranchItem = new Swiper('.branch-item__swiper', {


    navigation: {
        nextEl: '.swiper-button-next.branch-item-next',
        prevEl: '.swiper-button-prev.branch-item-prev',
    },

    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        1150: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 2,
        }
    }
});





// HERO SWIPERS

// Function to initialize each Swiper
function initializeSwiper(swiperClass) {
    new Swiper(swiperClass, {
        loop: true, // Enable looping
        effect: 'fade', // Apply fade effect
        fadeEffect: {
            crossFade: true, // Smooth crossfade between slides
        },
        autoplay: {
            delay: 5000, // 1-second delay between slides
            disableOnInteraction: false, // Continue autoplay after user interactions
        },
        speed: 5000, // 1-second transition speed
        allowTouchMove: false
    });
}

// Initialize each swiper slider
initializeSwiper('.swiper-hero-1');
initializeSwiper('.swiper-hero-2');
initializeSwiper('.swiper-hero-3');
initializeSwiper('.swiper-hero-4');
initializeSwiper('.swiper-hero-5');
initializeSwiper('.swiper-hero-6');
initializeSwiper('.swiper-hero-7');



// HEADER SCROLL VISIBLE
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    if (window.innerWidth > 1300 && window.scrollY > 20) {
        header.classList.add('header__open');
    } else {
        header.classList.remove('header__open');
    }
});

window.addEventListener('mousemove', function (e) {
    const header = document.querySelector('.header');
    
    if (window.innerWidth > 1300 && e.clientY <= 70) {
        header.classList.add('header__open');
    } else if (window.scrollY <= 20) {
        header.classList.remove('header__open');
    }
});

