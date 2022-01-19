const send = () => {
    const thanks = document.querySelector('.popup-thank')
    const close = document.querySelector('.close-thank')
    const form = (formId) => {
        const form = document.getElementById(formId)
        const userName = form.querySelector('input[name="name"]')
        const phone = form.querySelector('input[name="phone"]')
        const check = form.querySelector('input[type="checkbox"]')
        const btn = form.querySelector('.button')
        const data = {}
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            if (check.checked) {
                data.user = userName.value
                data.phone = phone.value
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => {
                        thanks.style.visibility = 'visible'
                        phone.value = ''
                        userName.value = ''
                        check.checked = false
                        res.json()
                    })
            }
        })
    }
    const formShort = (formId) => {
        const form = document.getElementById(formId)
        const phone = form.querySelector('input[name="phone"]')
        const check = form.querySelector('input[type="checkbox"]')
        const btn = form.querySelector('.button')
        const data = {}
        const consult = document.querySelector('.popup-consultation')
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            if (check.checked) {
                data.phone = phone.value
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => {
                        consult.style.visibility = 'hidden'
                        thanks.style.visibility = 'visible'
                        phone.value = ''
                        check.checked = false
                        res.json()
                    })
            }
        })
        close.addEventListener('click', (e) => {
            thanks.style.visibility = 'hidden'
        })
    }

    formShort('feedback1')
    form('feedback2')
    formShort('feedback3')
    formShort('feedback6')
    form('feedback4')
    form('feedback5')
}
export default send