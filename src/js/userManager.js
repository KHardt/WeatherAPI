const userManager = Object.create(null, {
    //get all users. etc. fetch's       MVH
    getSingleUsers: {
        value: (userName, email) => {
            return fetch(`http://localhost:8088/users?userName=${userName}&email=${email}`).then(r => r.json())
        }
    },

    /*
    value: (email, username) => {
        return fetch(`http://localhost:8088/users?email=${email}&username=${username}`)
        .then(r => r.json())
}
},*/

    getAllUsers: {
        value: () => {
            return fetch("http://localhost:8088/users").then(r => r.json())
        }
    },

    createUsers: {
        value: (newUser) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }).then(r => r.json)
        }
    },

    deleteUsers: {
        value: (id) => {
            return fetch("http://localhost:8088/entries/${id}", {
                method: "DELETE"
            }).then(r => r.json)
        },
        updateUsers: {
            value: () => {
                return fetch("http://localhost:8088/update", {
                    method: "PUT"
                }).then(r => r.json)
            }
        },
    }
})

module.exports = userManager