export class Mode {
    checkUsers(str) {
        return fetch(`http://localhost:3000/users?name_like=${str}`).then(res => res.json())
    }
    getRepairs() {
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
    getRepair(id) {
        return fetch(`http://localhost:3000/posts/${id}`).then(res => res.json())
    }
    editRepair(id, repair) {
        return fetch(`http://localhost:3000/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(repair),
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => res.json())
    }
    removeRepair(id) {
        return fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
    }
}