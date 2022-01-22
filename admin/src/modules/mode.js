export class Mode {
    checkUsers(str) {
        return fetch(`http://localhost:3000/users?name_like=${str}`).then(res => res.json())
    }

}