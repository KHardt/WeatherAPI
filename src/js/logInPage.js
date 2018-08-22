const userManager = require("./userManager")
const sessionActiveUser = require("./sessionManager")
const writeToDom = require("./writeToDom")
//const registration = require("./registration")


function logInPage () {
    console.log("hi")
document.getElementById("logIn").innerHTML = `
    <h1>Weather App</h1>
<h2>Please Log In</h2>

    <div class = "container">
        <label <label for="uname"><b>Username</b></label>
        <input id="usrNameInput" type="text" placeholder="Enter Username" name="uname" required/>

        <label for="email"><b>Email</b></label>
    <input id="emailInput" type="password" placeholder="Enter Email" name="email" required/>

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
    const email = document.getElementById("emailInput").value
    userManager.getSingleUsers(userName, email).then(user => {
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
    $("#logIn").empty()
    document.querySelector("#logIn").innerHTML = registration.renderForm();
    activateForm()

}
}


module.exports = logInPage