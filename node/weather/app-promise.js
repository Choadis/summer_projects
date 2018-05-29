const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to get weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.a);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL)
.then((response) => {
  if (response.data.status != 'OK') {
    throw new Error('Unable to find address')
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherURL = `https://api.darksky.net/forecast/0897e9ceb636146b0b72d67ba76989c7/${lat},${lng}`;


  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
})
.then((response) => {
  var temp = response.data.currently.temperature;
  var actualTemp = response.data.currently.apparentTemperature;

  console.log(`It is currently ${temp} and feels like ${actualTemp}`);
})
.catch((e) => {
  if (e.code === 'ECONNREFUSED'){
    console.log('Unable to connect to server');
  } else {
    console.log(e.message);
  }
});
