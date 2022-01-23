import { Mode } from './mode'
import { render } from './render'


export const addRepair = () => {
    const modal = document.getElementById('modal')
    const form = document.querySelector('#add-repair')
    const inputType = form.querySelector('#type')
    const inputName = form.querySelector('#name')
    const inputUnits = form.querySelector('#units')
    const inputCost = form.querySelector('#cost')

    mode.getRepair().then(data => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let count = data[data.length - 1].id
            const repair = {
                type: inputType.value,
                name: inputName.value,
                units: inputUnits.value,
                cost: +inputCost.value,
                id: count + 1
            }
            mode.addRepair(repair).then(() => {
                mode.getRepair().then(repairs => {
                    console.log(repairs);
                })
            })
        })

        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-addItem')) {
                modal.style.display = 'flex'
            }
            if (e.target.closest('.button__close')) {
                modal.style.display = 'none'
            }
            if (e.target.closest('.cancel-button')) {
                e.preventDefault()
                modal.style.display = 'none'
            }
        })
    })
}