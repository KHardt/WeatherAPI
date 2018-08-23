const sessionUser = require("./sessionManager")
const weatherAPI = require("./dataManager")

function writeToDom () {

let findUser = sessionUser.getActiveUser().id
let findWeather = weatherAPI.current(findUser)


    findWeather.then(result => {
        console.log(result)
        document.getElementById("container").innerHTML =`
        <h2>Your Weather for ${result.name}: </h2>
        <h3>Temperature: ${result.main.temp} </h3>
        <h3>Forecast: ${result.weather[0].description} </h3>
    `
    })

}

module.exports = writeToDom
