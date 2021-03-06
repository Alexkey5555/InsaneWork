import Swiper, { Navigation, Pagination } from 'swiper';
import documents from './documents';


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
    const row = document.querySelector('.transparency-slider')
    const review = document.querySelector('.reviews-slider')
    review.style.overflow = 'visible'

    if (width <= 1024) {
        const swiper2 = new Swiper('.repair-types-nav', {
            slidesPerView: 3,
            spaceBetween: 10,

            navigation: {
                nextEl: ".nav-arrow_right",
                prevEl: ".nav-arrow_left",
            },
        })
        row.style.flexWrap = 'nowrap'
        const swiper3 = new Swiper('.transparency-slider-wrap', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: ".slider-arrow_right",
                prevEl: ".slider-arrow_left",
            },
        })

    }
    const swiper4 = new Swiper('.reviews-slider-wrap', {
        slidesPerView: 1,
        spaceBetween: 1200,
        navigation: {
            nextEl: ".slider-arrow_right",
            prevEl: ".slider-arrow_left",
        },
    })


}
export default swiper