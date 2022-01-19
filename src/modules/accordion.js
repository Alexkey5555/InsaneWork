const accordion = () => {
    const acord = document.querySelectorAll('.title_block')
    document.addEventListener('click', (e) => {

        acord.forEach(item => {
            if (e.target.matches('.title_block')) {
                if (e.target === item) {
                    item.classList.add('msg-active')
                }
                else {
                    item.classList.remove('msg-active')
                }
            }

        })
    })
}
export default accordion