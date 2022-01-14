const menu = () => {
    const menu = document.querySelector('.popup-dialog-menu')



    document.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.closest('.menu__icon')) {
            e.preventDefault()
            menu.style.transform = 'translate3d(0px, 0, 0)'
            menu.style.webkitTransform = 'translate3d(0px, 0, 0)'
        }
        else if (e.target.closest('.close-menu') || !e.target.closest('.row')) {
            menu.removeAttribute('style')
        }
    })
}
export default menu