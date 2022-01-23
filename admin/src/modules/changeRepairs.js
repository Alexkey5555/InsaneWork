import { Mode } from "./mode"

export const changeRepairs = () => {
    const tbody = document.getElementById('tbody')
    const btnChange = document.querySelectorAll('.action-change')
    const modal = document.getElementById('modal')
    const form = document.querySelector('#add-repair')
    const inputType = form.querySelector('#type')
    const inputName = form.querySelector('#name')
    const inputUnits = form.querySelector('#units')
    const inputCost = form.querySelector('#cost')
    const modalHeader = document.querySelectorAll('.modal__header')

    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.action-change')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.key
            mode.getRepair(id).then(repair => {
                modal.style.display = 'flex'
                modalHeader[0].style.display = 'none'

                modalHeader[1].style.display = 'block'
                inputType.value = repair.type
                inputName.value = repair.name
                inputUnits.value = repair.units
                inputCost.value = repair.cost
                form.dataset.method = id
            })
        }
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (form.dataset.method) {
            const id = form.dataset.method
            const repair = {
                type: inputType.value,
                name: inputName.value,
                units: inputUnits.value,
                cost: +inputCost.value,
                id: id
            }
            mode.editRepair(id, repair).then(() => {
                mode.getRepairs().then(rep => {
                    render(rep)
                    form.reset()
                    form.removeAttribute('data-method')
                })
            })
        }
    })
}