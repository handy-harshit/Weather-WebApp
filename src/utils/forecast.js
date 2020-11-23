const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6ab183c304652727aada8d072181eb52&query=' + latitude + ',' + longitude

    request({url, json: true},(error, {body}) => {
        if(error){
            callback({error: 'Unable to connect to internet'},undefined)
        } else if(body.error){
            callback({error: 'Unable to find the location'},undefined)
        } else {
            callback(undefined,
                "The weather is " + body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out there. There is " + body.current.precip + "% chances of rain."
            )
        }
    })
}

module.exports = forecast