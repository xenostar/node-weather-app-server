const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8373aad99f4f7d50ebee509ecc192136&units=f&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find forecast for location.");
    } else {
      callback(undefined, {
        weather_descriptions: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feels_like: body.current.feelslike,
        summary: `${body.current.weather_descriptions[0]} - It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`,
      });
    }
  });
};

module.exports = forecast;
