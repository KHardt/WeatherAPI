const userManager = require("./userManager")
const sessionActiveUser = require("./sessionManager")
const writeToDom = require("./writeToDom")
const registration = require("./registrationForm")
const activateForm = require("./registrationManager")



function logInPage () {
    console.log("hi")
document.getElementById("logIn").innerHTML = `
    <h1>Weather App</h1>
<h2>Please Log In</h2>

    <div class = "container">
        <label <label for="uname"><b>Username</b></label>
        <input id="usrNameInput" type="text" placeholder="Enter Username" name="uname" required/>

        <label for="password"><b>Password</b></label>
    <input id="passwordInput" type="password" placeholder="Enter Password" name="password" required/>

    <button id="logInButton">Login</button>
    <br>
    <button id="registerButton" type="button">Register</button>

    </div>

`
//added event listeners:
document.getElementById("logInButton").addEventListener("click", logInUser)
document.getElementById("registerButton").addEventListener("click", regUser)

//below is specific for loginbutton action:
function logInUser() {
    const userName = document.getElementById("usrNameInput").value
    const password = document.getElementById("passwordInput").value
    userManager.getSingleUsers(userName, password).then(user => {
        //console.log(user);
        if (user.length === 0 || userName === "") {
            alert("please try again!")

        } else { //load all the users stuff
            sessionActiveUser.saveActiveUser(user)
            document.getElementById("logIn").innerHTML = "";
            //loadTaskForm();
            writeToDom()
            //weatherInfo()





        }


    })
}
//below if user clicks register
function regUser() {
    document.getElementById("logIn").innerHTML = ""
    document.getElementById("logIn").innerHTML = registration.renderForm();
    activateForm()

}


}


module.exports = logInPage