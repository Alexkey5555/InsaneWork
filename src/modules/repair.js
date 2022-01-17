const repair = () => {
    const navList = document.querySelectorAll('.repair-types-nav__item')
    const repairSlides = document.querySelectorAll('.repair-types-slider>div')
    const countCurrent = document.querySelector('.slider-counter-content__current')
    const countTotal = document.querySelector('.slider-counter-content__total')
    let slides = repairSlides[0].querySelectorAll('div')
    let i = 0;
    let elemIn = 0;
    document.addEventListener('click', (e) => {
        navList.forEach((item, index) => {

            if (e.target.matches('.repair-types-nav__item')) {
                let len = repairSlides[index].querySelectorAll('div')
                if (e.target === item) {
                    item.classList.add('active')
                    repairSlides[index].style.display = 'block'
                    countTotal.textContent = len.length
                    elemIn = index
                    countCurrent.textContent = 1
                    i = 0
                    len[0].classList.add('repair-active')
                }
                else {
                    item.classList.remove('active')
                    repairSlides[index].style.display = 'none'
                }
            }
        })
        if (e.target.matches('#repair-types-arrow_right')) {
            slides = repairSlides[elemIn].querySelectorAll('div')
            ++i;
            countCurrent.textContent = i + 1
            if (i >= slides.length) {
                slides[i - 1].classList.remove("repair-active");
                i = 0;
                countCurrent.textContent = 1
                slides[i].classList.add("repair-active");
            } else {
                slides[i - 1].classList.remove("repair-active");
                slides[i].classList.add("repair-active");
            }
        }
        if (e.target.matches('#repair-types-arrow_left')) {
            slides = repairSlides[elemIn].querySelectorAll('div')
            --i;
            countCurrent.textContent -= 1
            if (i < 0) {
                slides[i + 1].classList.remove("repair-active");
                i = slides.length - 1
                countCurrent.textContent = slides.length
                slides[i].classList.add("repair-active");
            } else {
                slides[i + 1].classList.remove("repair-active");
                slides[i].classList.add("repair-active");
            }
        }
    })
}
export default repair