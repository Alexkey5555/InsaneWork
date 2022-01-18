const documents = () => {
    const itemDoc = document.querySelectorAll('.transparency-item__img')
    const popTrans = document.querySelector('.popup-transparency')
    const current = popTrans.querySelector('.slider-counter-content__current')
    const total = popTrans.querySelector('.slider-counter-content__total')
    const slides = document.querySelectorAll('.popup-transparency-slider__slide')

    total.textContent = itemDoc.length
    let i = 0;

    document.addEventListener('click', (e) => {
        itemDoc.forEach((item, index) => {
            if (e.target.matches('.transparency-item__img')) {
                if (e.target === item) {
                    popTrans.style.visibility = 'visible'
                    slides[index].style.display = 'block'
                    current.textContent = index + 1
                    i = index
                }
                else {
                    slides[index].style.display = 'none'
                }
            }
        })
        if (e.target.closest('div>.close')) {
            popTrans.removeAttribute('style')
        }
        if (e.target.matches('#transparency_right>svg')) {
            if (i !== 2) {
                slides[i].style.display = "none"
                slides[i + 1].style.display = "block"
                i++
                current.textContent = i + 1
            }
        }
        if (e.target.matches('#transparency_left>svg')) {
            if (i > 0) {
                slides[i].style.display = "none"
                slides[i - 1].style.display = "block"
                i--
                current.textContent -= 1
                console.log(i);
                if (i === 0) {
                    slides[i].style.display = "block"
                }
            }
        }
    })







}
export default documents