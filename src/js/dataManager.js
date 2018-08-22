
const weatherAPI = Object.create(null, {

    current: {
        value: () => { //${id}?
            return fetch("http://api.openweathermap.org/data/2.5/weather?id=5003243&APPID=55f3753c4a3fa9546d456917dbb9b2f5").then(r => r.json())



        }

    },


})

module.exports = weatherAPI


