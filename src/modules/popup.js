const popup = () => {

    const icon = document.querySelectorAll('.formula-item__icon')
    const formulaIcon = document.querySelectorAll('.formula-slider__slide')

    formulaIcon.forEach(item => {
        document.addEventListener('touchstart', (e) => {
            if (e.target === item) {
                item.childNodes[1].classList.add('active-item')
                item.style.opacity = '1';
            }
            else {
                item.childNodes[1].classList.remove('active-item')
                item.style.opacity = '0.4';
            }
        })
    })

    icon.forEach(item => {
        item.addEventListener('mouseover', (e) => {

            let top = e.target.getBoundingClientRect().top
            let minHeight = e.target.parentElement.firstElementChild.clientHeight + 20

            if (minHeight > top) {
                e.target.parentElement.classList.add('popup-rotate')
                e.target.parentElement.classList.add('active-item')
                e.target.parentElement.firstElementChild.style.cssText = `
                -webkit-transform: translate3d(0, ${minHeight + 145}px, 0);
                transform: translate3d(0, ${minHeight + 145}px, 0);
                z-index: 3;
               `
                e.target.parentElement.classList.add('active-item')
            }
            e.target.parentElement.classList.add('active-item')
        })
        item.addEventListener('mouseout', (e) => {
            e.target.parentElement.classList.remove('active-item')
            e.target.parentElement.classList.remove('popup-rotate')
            e.target.parentElement.firstElementChild.removeAttribute('style')
        })
    })
}
export default popup