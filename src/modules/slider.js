const slider = () => {
    const slides = document.querySelectorAll('.portfolio-slider__slide')
    const btnRight = document.getElementById('portfolio-arrow_right')
    const btnLeft = document.getElementById('portfolio-arrow_left')
    let pixel = 0
    btnRight.addEventListener('click', (e) => {
        pixel -= 352;
        if (pixel < 0) {
            btnLeft.style.display = 'flex'
        }
        if (pixel === -704) {
            console.log('ok');
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