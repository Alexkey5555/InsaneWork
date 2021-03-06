import { render } from './render'


export const list = () => {
    const select = document.querySelectorAll('#typeItem')
    let arr = []

    function unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }

    mode.getRepairs().then(data => {
        data.forEach(item => {
            arr = arr.concat(item.type)
        })
        let list = unique(arr)
        list.forEach((elem, index) => {
            let opt = document.createElement('option')
            opt.value = index
            opt.textContent = elem
            select[0].append(opt)
        })
        select[0].addEventListener('change', (e) => {
            select.forEach(elem => {
                const sel = elem.options[elem.selectedIndex]
                if (sel.value === 'Все услуги') {
                    mode.getRepairs().then(repairs => {
                        render(repairs)
                    })
                }
                else {


                    mode.filter(sel.textContent).then(post => {
                        render(post)
                    })
                }
            })
        })
    })
}