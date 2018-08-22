const sessionUser = require("./sessionManager")
const weatherAPI = require("./dataManager")

function writeToDom () {

let findUser = sessionUser.getActiveUser().id
let findWeather = weatherAPI.current(findUser)


    findWeather.then(result => {
        console.log(result)
        document.getElementById("container").innerHTML =`
        <h2>Your Weather: ${result.weather[0]}</h2>
    `
    })

}

module.exports = writeToDom
