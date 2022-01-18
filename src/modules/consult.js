const consultation = () => {
    const consult = document.querySelector('.popup-consultation')
    const btn = document.querySelectorAll('.button_wide')

    document.addEventListener('click', (e) => {
        btn.forEach(item => {
            if (e.target === item) {
                consult.style.visibility = 'visible'
            }
        })
        if (e.target.closest('div>.close')) {
            consult.removeAttribute('style')
        }
    })
}
export default consultation