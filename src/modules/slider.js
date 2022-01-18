const slider = () => {
    const slides = document.querySelectorAll('.portfolio-slider__slide')
    const btnRight = document.getElementById('portfolio-arrow_right')
    const btnLeft = document.getElementById('portfolio-arrow_left')
    const popupPortfolio = document.querySelector('.popup-portfolio')
    const listSlide = document.querySelectorAll('.portfolio-slider__slide-frame')

    const sliderPortfolio = document.querySelectorAll('.popup-portfolio-slider__slide')
    const textPortfolio = document.querySelectorAll('.popup-portfolio-text')
    const countTotal = popupPortfolio.querySelector('.slider-counter-content__total')
    const current = popupPortfolio.querySelector('.slider-counter-content__current')

    let i = 0;
    let pixel = 0
    document.addEventListener('click', (e) => {

        listSlide.forEach((item, index) => {
            let num = index - 10
            if (e.target.matches('.portfolio-slider__slide-frame')) {
                if (index >= 10) {
                    countTotal.textContent = num + 1
                    if (e.target === item) {
                        i = num
                        current.textContent = i + 1
                        popupPortfolio.style.visibility = 'visible'
                        popupPortfolio.style.zIndex = '11'
                        sliderPortfolio[num].style.display = 'block'
                        textPortfolio[num].style.display = "block"
                    }
                    else {
                        textPortfolio[num].style.display = "none"
                        sliderPortfolio[num].style.display = 'none'
                    }
                }
            }
            if (e.target.closest('div>.close')) {
                popupPortfolio.removeAttribute('style')

            }
        })
        if (e.target.matches('#popup_portfolio_left>svg')) {
            if (i > 0) {
                sliderPortfolio[i].style.display = "none"
                textPortfolio[i].style.display = "none"
                sliderPortfolio[i - 1].style.display = "block"
                textPortfolio[i - 1].style.display = "block"
                i--
                current.textContent -= 1
            }
        }
        if (e.target.matches('#popup_portfolio_right>svg')) {
            if (i !== 9) {
                sliderPortfolio[i].style.display = "none"
                textPortfolio[i].style.display = "none"
                sliderPortfolio[i + 1].style.display = "block"
                textPortfolio[i + 1].style.display = "block"
                i++
                current.textContent = i + 1
            }
        }
    })

    btnRight.addEventListener('click', (e) => {
        pixel -= 352;
        if (pixel < 0) {
            btnLeft.style.display = 'flex'
        }
        if (pixel === -704) {

            btnRight.style.display = 'none';
        }
        slides[0].style.marginLeft = pixel + 'px'
    })
    btnLeft.addEventListener('click', (e) => {
        pixel += 352;
        btnRight.style.display = 'flex'
        if (pixel === 0) {
            btnLeft.style.display = 'none'
        }
        slides[0].style.marginLeft = pixel + 'px'
    })
}
export default slider