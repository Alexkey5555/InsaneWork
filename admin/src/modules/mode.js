export class Mode {
    checkUsers(str) {
        return fetch(`http://localhost:3000/users?name_like=${str}`).then(res => res.json())
    }
    getRepair() {
        return fetch('http://localhost:3000/posts').then(res => res.json())
    }
}