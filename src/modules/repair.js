const repair = () => {
    const navList = document.querySelectorAll('.repair-types-nav__item')
    const repairSlides = document.querySelectorAll('.repair-types-slider>div')
    const arrowPrev = document.getElementById('repair-types-arrow_left')
    const arrowNext = document.getElementById('repair-types-arrow_right')
    const countTotal = document.querySelector('.slider-counter-content__total')


    document.addEventListener('click', (e) => {
        navList.forEach((item, index) => {

            if (e.target.matches('.repair-types-nav__item')) {
                if (e.target === item) {
                    let len = repairSlides[index].querySelectorAll('div')
                    item.classList.add('active')
                    repairSlides[index].style.display = 'block'
                    countTotal.textContent = len.length

                }
                else {
                    item.classList.remove('active')
                    repairSlides[index].style.display = 'none'

                }

            }


        })

        if (e.target === arrowPrev) {
            console.log('prev');

        }
        else if (e.target === arrowNext) {
            console.log('next');
        }
    })
}
export default repair