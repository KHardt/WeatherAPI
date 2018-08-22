User Weather with a database
Your goal is to only hit the Weather API once a day (per user or per zip code).

Single page app with Browserify and Grunt
Utilizes json server and OpenWeather(get an API key)
Have a user login with Username and password.
If user does not exist in json server, add them to user collection with a default zipcode.
If user exists, use details in json server.
User details will contain today's weather.
If today's weather exists, use it.
If today's weather does not exist (NA or yesterday), get today's weather and save to json server.