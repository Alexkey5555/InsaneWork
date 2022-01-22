import { Mode } from "./mode"

export const login = () => {
    const form = document.getElementById('login')
    const input = form.querySelector('#name')
    const pass = form.querySelector('#type')
    const warning = form.querySelectorAll('.text-warning')
    let check = false

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        mode.checkUsers(input.value).then(user => {

            if (user.length !== 0) {
                if (user[0].name === input.value) {
                    if (user[0].password === pass.value) {
                        input.value = ''
                        check = true
                        document.cookie = "auth=true"
                    }
                    else {
                        warning[1].style.display = 'block'
                        pass.value = ''
                    }
                    warning[0].style.display = 'none'
                }
            }
            else {
                input.value = ''
                warning[0].style.display = 'block'
            }
            if (check) {
                window.location.href = 'table.html'
            }
        })
    })
}
