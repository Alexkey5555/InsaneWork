import Swiper, { Navigation, Pagination } from 'swiper';


Swiper.use([Navigation, Pagination]);

const swiper = () => {

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

}
export default swiper