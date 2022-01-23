export const addRepair = () => {

    const modal = document.getElementById('modal')
    document.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.closest('.btn-addItem')) {
            modal.style.display = 'flex'
        }
        if (e.target.closest('.button__close') || e.target.closest('.cancel-button')) {
            modal.style.display = 'none'

        }

    })
}