const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/0897e9ceb636146b0b72d67ba76989c7/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // console.log(`Its currently ${body.currently.temperature} degrees in ${argv.a}`);
      callback(undefined, {
        temp: body.currently.temperature,
        actualTemp: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
