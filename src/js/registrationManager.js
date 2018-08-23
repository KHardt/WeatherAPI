const userManager = require("./userManager");
const logInPage = require("./logInPage")

const activateForm = function () {
    document.getElementById("registrationSubmitButton").addEventListener("click", () => {
        userManager.getAllUsers().then(allUsers => {
            let validFormInput = true;

            allUsers.forEach(users => {
                if (users.password === document.querySelector("#password").value || users.userName === document.querySelector("#userName").value) {
                    validFormInput = false;
                    alert("This username or password already exists. Please try again.")
                }
            })
            if (validFormInput) {
                userManager.createUsers({
                    userName: document.querySelector("#userName").value,
                    password: document.querySelector("#password").value,
                    zipcode: "37209"
                });

                alert("You have successfully registered. Please log in.")
                logInPage()
            }
        })
    })
}

module.exports = activateForm