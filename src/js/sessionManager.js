const sessionActiveUser = Object.create(null, {

    //get user from session storage
    getActiveUser: {
        value: () =>
            //note the need below to JSON.parse the item we get from session storage.
            JSON.parse(sessionStorage.getItem("ActiveUser"))
    },
    //save user to session storage
    saveActiveUser: {
        value: (users) => {
            //note the need below to JSON.stringify the item we get from session storage.
            console.log(users[0])
            sessionStorage.setItem("ActiveUser", JSON.stringify({
                "id": users[0].id,
                "username": users[0].userName,
                "password": users[0].password

            }))

        }
    },


    //remove user from session storage
    clearActiveUser: {
        value: () => {
            sessionStorage.removeItem("ActiveUser")
        }
    }


})


module.exports = sessionActiveUser


