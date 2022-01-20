const upload = () => {
    const btnNav = document.querySelectorAll('.popup-repair-types-nav__item')
    const list = document.querySelectorAll('.popup-repair-types-content-table__list')
    const switchInner = document.getElementById('switch-inner')
    let arr = []
    let type1 = []
    let type2 = []
    let type3 = []
    let type4 = []

    function unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }

    fetch('./db/db.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                arr = arr.concat(item.type)
                if (data[0].type === item.type) {
                    type1.push(item)
                }
                if (data[18].type === item.type) {
                    type2.push(item)
                }
                if (data[35].type === item.type) {
                    type3.push(item)
                }
                if (data[53].type === item.type) {
                    type4.push(item)
                }
            })
            let listType = unique(arr)
            btnNav.forEach((nav, index) => {

                let test = index
                nav.textContent = listType[index]
                const mobileRow = list[index].querySelectorAll('.mobile-row')
                mobileRow.forEach((item, index) => {
                    const name = item.querySelector('.repair-types-name')
                    const units = item.querySelectorAll('.repair-types-value')[0]
                    const cost = item.querySelectorAll('.repair-types-value')[1]

                    if (test === 0) {
                        name.textContent = type1[index].name
                        units.textContent = type1[index].units
                        cost.textContent = type1[index].cost + ' руб.'
                    }
                    if (test === 1) {
                        name.textContent = type2[index].name
                        units.textContent = type2[index].units
                        cost.textContent = type2[index].cost + ' руб.'
                    }
                    if (test === 2) {
                        name.textContent = type3[index].name
                        units.textContent = type3[index].units
                        cost.textContent = type3[index].cost + ' руб.'
                    }
                    if (test === 3) {
                        name.textContent = type4[index].name
                        units.textContent = type4[index].units
                        cost.textContent = type4[index].cost + ' руб.'
                    }
                })
            })

        })
    document.addEventListener('click', (e) => {
        btnNav.forEach((item, index) => {
            if (e.target.matches('.popup-repair-types-nav__item')) {
                if (e.target === item) {
                    switchInner.textContent = item.textContent
                    item.style.fontWeight = 'bold'
                    list[index].style.display = 'block'
                }
                else {
                    item.removeAttribute('style')
                    list[index].style.display = 'none'

                }
            }
        })
    })
}
export default upload