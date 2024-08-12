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
