import Swiper, { Navigation, Pagination } from 'swiper';


Swiper.use([Navigation, Pagination]);

const swiper = () => {
    const width = window.screen.width
    const swiper = new Swiper('.formula-slider-wrap', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: ".slider-arrow_right",
            prevEl: ".slider-arrow_left",
        },

    });
    const formulaHide = document.querySelector('.formula-slider-wrap')
    formulaHide.style.overflow = 'hidden';

    if (width <= 1024) {
        const swiper2 = new Swiper('.repair-types-nav', {
            slidesPerView: 3,
            spaceBetween: 10,

            navigation: {
                nextEl: ".nav-arrow_right",
                prevEl: ".nav-arrow_left",
            },
        })
    }

}
export default swiper