const menu = () => {
    const menu = document.querySelector('.popup-dialog-menu')
    const menuItem = document.querySelectorAll('.popup-menu-nav__item>a')
    const menuAllService = document.querySelectorAll('.allservice')
    const allServiceModal = document.querySelector('.popup-repair-types')
    const privacy = document.querySelectorAll('span.link-privacy')
    const modalPrivacy = document.querySelector('.popup-privacy')



    document.addEventListener('click', (e) => {

        if (e.target.closest('.menu__icon')) {
            e.preventDefault()
            menu.style.transform = 'translate3d(0px, 0, 0)'
            menu.style.webkitTransform = 'translate3d(0px, 0, 0)'
        }
        else if (e.target.closest('.close-menu') || !e.target.closest('.row')) {
            menu.removeAttribute('style')
        }

        menuItem.forEach(item => {
            if (e.target === item) {
                e.preventDefault()
                let linkhref = e.target.attributes.href.value.slice(1)
                let link = document.getElementById(linkhref)
                link.scrollIntoView({ behavior: "smooth" })
                menu.removeAttribute('style')
            }
        })
        if (e.target.closest('.button-footer')) {
            e.preventDefault()
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        if (e.target.closest('div>.close')) {
            allServiceModal.removeAttribute('style')
            modalPrivacy.removeAttribute('style')
        }
        menuAllService.forEach(item => {
            if (e.target === item) {
                e.preventDefault()
                allServiceModal.style.zIndex = '99999'
                allServiceModal.style.visibility = 'visible'
                menu.removeAttribute('style')
            }
        })
        privacy.forEach(item => {
            if (e.target === item) {
                modalPrivacy.style.visibility = 'visible'
                console.log(item);
            }
        })
    })
}
export default menu