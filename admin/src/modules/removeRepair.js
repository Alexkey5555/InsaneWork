import { render } from './render'


export const removeRepair = () => {
    const tbody = document.getElementById('tbody')

    tbody.addEventListener('click', (e) => {

        if (e.target.closest('.action-remove')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.key
            mode.removeRepair(id).then(res => {
                mode.getRepairs().then(repair => {
                    render(repair)
                })
            })
        }
    })
}