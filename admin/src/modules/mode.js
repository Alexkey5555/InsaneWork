export class Mode {
    checkUsers(str) {
        return fetch(`http://localhost:3000/users?name_like=${str}`).then(res => res.json())
    }
    checkPass(pass) {
        return fetch(`http://localhost:3000/users?password_like=${pass}`).then(res => res.json())
    }
}