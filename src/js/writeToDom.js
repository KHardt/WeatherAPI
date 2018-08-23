const sessionUser = require("./sessionManager")
const weatherAPI = require("./dataManager")

function writeToDom() {

    let findUser = sessionUser.getActiveUser().id
    let findWeather = weatherAPI.current(findUser)


    findWeather.then(result => {
        let temp = ((result.main.temp - 273.15) * 9 / 5) + 32
        console.log(result)
        document.getElementById("container").innerHTML = `
        <h2>Your Weather for ${result.name}: </h2>
        <h3>Temperature: ${temp} </h3>
        <h3>Current Conditions: ${result.weather[0].main} </h3>
    `
    })

}

module.exports = writeToDom
