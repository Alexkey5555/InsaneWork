const menu = () => {
    const menu = document.querySelector('.popup-dialog-menu')
    const menuItem = document.querySelectorAll('.popup-menu-nav__item>a')




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
    })
}
export default menu