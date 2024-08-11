// Custom Scripts
// Custom scripts



// burger menu

const menu = document.querySelector('.nav__menu')
const burger = document.querySelector('.nav__burger')


burger.addEventListener('click', () => {
    menu.classList.toggle('active')
})






// SWIPER


const swiperBranch = new Swiper('.branch__swiper', {

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 140,

});
