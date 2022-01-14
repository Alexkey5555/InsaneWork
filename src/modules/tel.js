const tel = () => {
    const arrow = document.querySelector('.header-contacts__arrow')
    const divPhone = document.querySelector('.header-contacts__phone-number-accord')
    const phone = document.querySelector('.header-contacts__phone-number-accord>a')
    let change = true

    arrow.addEventListener('click', (e) => {
        console.dir(e.target);
        if (change) {
            divPhone.style.position = 'relative'
            phone.style.webkitTransition = '0.5s'
            phone.style.transition = '0.5s'
            phone.style.opacity = '1'
            change = false
        }
        else {
            divPhone.style.position = 'absolute'
            phone.style.webkitTransition = '0s'
            phone.style.transition = '0s'
            phone.style.opacity = '0'
            change = true
        }
    })
}
export default tel