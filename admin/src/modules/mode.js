export class Mode {
    checkUsers(str) {
        return fetch(`http://localhost:3000/users?name_like=${str}`).then(res => res.json())
    }
    setAuth(id, data) {
        return fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => res.json())
    }
}