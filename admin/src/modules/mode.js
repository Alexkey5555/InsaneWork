export class Mode {
    checkUsers(str) {
        return fetch(`http://localhost:3000/users?name_like=${str}`).then(res => res.json())
    }
    getRepair() {
        return fetch('http://localhost:3000/posts').then(res => res.json())
    }
    filter(str) {
        return fetch(`http://localhost:3000/posts?type=${str}`).then(res => res.json())
    }
    addRepair(repair) {
        return fetch('http://localhost:3000/posts', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(repair)
        }).then(res => res.json())
    }
}